"use client";
import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { updateNote } from "@/lib/notes";

const NoteForm = ({ note, id, token }) => {
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState(note.img);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const router = useRouter();

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (title !== note.name) {
      formData.append("title", title);
    }
    if (body !== note.body) {
      formData.append("body", body);
    }
    if (selectedFile) {
      formData.append("img", selectedFile);
    }

    try {
      const result = await updateNote(formData, id, token);
      console.log("Update success:", result);
      router.push("/home");
      router.refresh();
    } catch (err) {
      console.error("Error updating note:", err);
      setError(err.message || "An error occurred");
    }
  };

  const textareaRef = useRef(null);
  const autoResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
    }
  };
  useEffect(() => {
    autoResize();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 mx-auto max-w-2xl bg-white rounded-xl drop-shadow-md"
    >
      <div
        className="relative mx-auto mb-8 w-full h-80 cursor-pointer"
        onClick={handleImageClick}
      >
        <Image
          src={imagePreview}
          alt="img"
          fill
          className="object-cover mx-auto mb-5 w-full rounded-lg"
          unoptimized // Tambahkan ini untuk menghindari masalah dengan URL.createObjectURL
        />
        <div className="flex absolute inset-0 justify-center items-center bg-black bg-opacity-40 rounded-lg opacity-0 transition-opacity hover:opacity-100">
          <span className="text-white">Click to change image</span>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          className="hidden"
          name="profile_pic" // Tambahkan name attribute
        />
      </div>
      <input
        className="w-full text-3xl font-semibold text-black focus:outline-none"
        value={title}
        placeholder="set your title here"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="box-border mt-2 w-full rounded-md resize-none text-secondary focus:outline-none h-max"
        ref={textareaRef}
        onInput={autoResize}
      ></textarea>

      {error && <div className="text-sm text-center text-red-500">{error}</div>}

      <button type="submit" className="mt-5 button">
        submit
      </button>
      <Link href={"/home"}>
        <div className="mt-3 text-center sec-button">Back to home</div>
      </Link>
    </form>
  );
};

export default NoteForm;
