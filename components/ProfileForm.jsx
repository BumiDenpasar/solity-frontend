"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { logoutUser, updateUser } from "@/lib/auth";
import { toast } from 'react-toastify';


const ProfileForm = ({ initialData, token }) => {
  const initialProfilePic =
  initialData.profile_pic && Object.keys(initialData.profile_pic).length > 0
      ? initialData.profile_pic
      : "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg";
  const [email, setEmail] = useState(initialData.email);
  const [name, setName] = useState(initialData.name);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState(initialProfilePic);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingLogout, setLoadingLogout] = useState(false);

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

  const handleLogout = async (e) => {
    e.preventDefault();
    setLoadingLogout(true);
    try {
      const result = await logoutUser(token);
      toast.success('Logout Success!');
      router.push("/");
      router.refresh();
    } catch (err) {
      toast.error('An error occurred');
      setError(err.message || "An error occurred");
    } finally {
      setLoadingLogout(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    if (name !== initialData.name) {
      formData.append("name", name);
    }
    if (email !== initialData.email) {
      formData.append("email", email);
    }
    if (selectedFile) {
      formData.append("profile_pic", selectedFile);
    }

    try {
      const result = await updateUser(formData, token);
      toast.success('Profile Updated!');
      router.push("/home");
      router.refresh();
    } catch (err) {
      toast.error('An error occurred');
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div
        className="relative mx-auto w-52 h-52 cursor-pointer lg:h-80 lg:w-80"
        onClick={handleImageClick}
      >
        <Image
          src={imagePreview}
          alt="Profile pic"
          fill
          className="object-cover rounded-full border-2 border-brand"
          unoptimized
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
          name="profile_pic"
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

      {error && <div className="text-sm text-center text-red-500">{error}</div>}

      <button type="submit" className=  {loading ? "disabled-button" : "button"} disabled={loading}>
        {loading ? "Updating..." : "Submit"}
      </button>

      <button
        onClick={handleLogout}
        className={loadingLogout ? "disabled-button" : "danger-button"}
        disabled={loadingLogout}
      >
        {loadingLogout ? "Logging out..." : "Logout"}
      </button>
    </form>
  );
};

export default ProfileForm;
