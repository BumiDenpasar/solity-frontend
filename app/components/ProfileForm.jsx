"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { updateUser } from "@/lib/auth";

const ProfileForm = ({ initialData, token }) => {
  const [email, setEmail] = useState(initialData.email);
  const [name, setName] = useState(initialData.name);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState(initialData.profile_pic);
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

    // Hanya append jika nilai berbeda dari initialData
    if (name !== initialData.name) {
      formData.append('name', name);
    }
    if (email !== initialData.email) {
      formData.append('email', email);
    }
    if (selectedFile) {
      formData.append('profile_pic', selectedFile);
    }

    try {
      const result = await updateUser(formData, token);
      console.log('Update success:', result);
      router.push("/home");
      router.refresh();
    } catch (err) {
      console.error('Error updating profile:', err);
      setError(err.message || "An error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="relative mx-auto w-80 h-80 cursor-pointer" onClick={handleImageClick}>
        <Image
          src={imagePreview}
          alt="Profile pic"
          fill
          className="object-cover rounded-full border-2 border-brand"
          unoptimized // Tambahkan ini untuk menghindari masalah dengan URL.createObjectURL
        />
        <div className="flex absolute inset-0 justify-center items-center bg-black bg-opacity-40 rounded-full opacity-0 transition-opacity hover:opacity-100">
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
      
      <div className="input-container">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Bumi Denpasar"
          className="input"
          name="name" // Tambahkan name attribute
        />
      </div>

      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
          className="input"
          name="email" // Tambahkan name attribute
        />
      </div>

      {error && (
        <div className="text-sm text-center text-red-500">{error}</div>
      )}

      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};

export default ProfileForm;