"use client";

import { useState, useEffect } from "react";
import PageHero from "@/components/layout/PageHero";
import CareersBenefits from "@/feature/careers/components/CareersBenefits";
import CareersOpenings from "@/feature/careers/components/CareersOpenings";
import ApplicationForm from "@/feature/careers/components/ApplicationForm";
import SpeculativeInquiry from "@/feature/careers/components/SpeculativeInquiry";

export default function CareersPage() {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedRole, setExpandedRole] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("All");
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    coverLetter: "",
    resumeName: "",
    resumeContent: ""
  });
  const [formState, setFormState] = useState({
    isSubmitting: false,
    submitted: false,
    error: ""
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        if (res.ok) {
          const data = await res.json();
          setRoles(data);
        }
      } catch (err) {
        console.error("Failed to load job listings:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleToggle = (id) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const processFile = (file) => {
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert("File size exceeds 10MB limit.");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedFile(file);
      setFormData((prev) => ({
        ...prev,
        resumeName: file.name,
        resumeContent: reader.result // Base64 data URL
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFormData((prev) => ({
      ...prev,
      resumeName: "",
      resumeContent: ""
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.role) {
      setFormState({ isSubmitting: false, submitted: false, error: "Please fill out all required fields." });
      return;
    }

    setFormState({ isSubmitting: true, submitted: false, error: "" });

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState({ isSubmitting: false, submitted: true, error: "" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          role: "",
          coverLetter: "",
          resumeName: "",
          resumeContent: ""
        });
        setSelectedFile(null);
      } else {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to submit application");
      }
    } catch (err) {
      setFormState({ isSubmitting: false, submitted: false, error: err.message || "An unexpected error occurred." });
    }
  };

  // Filter logic
  const filteredRoles = roles.filter(role => {
    const matchesSearch = role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation = filterLocation === "All" ||
      role.location.toLowerCase().includes(filterLocation.toLowerCase());

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="w-full bg-[#f8fafc] text-[#0a1f44]">
      {/* 1. HERO SECTION */}
      <PageHero
        title="Careers at ICC"
        subtitle="Join our team of project managers, engineers, and fit-out consultants building next-generation commercial spaces."
        breadcrumbs={[{ label: "Careers" }]}
      />

      {/* 2. BENEFITS / VALUE PROPOSITION */}
      <CareersBenefits />

      {/* 3. ACTIVE ROLES & APPLICATION SECTION */}
      <section className="bg-slate-100/50 border-t-2 border-slate-200/60 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN: ACTIVE ROLES LIST */}
            <CareersOpenings
              loading={loading}
              filteredRoles={filteredRoles}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filterLocation={filterLocation}
              setFilterLocation={setFilterLocation}
              expandedRole={expandedRole}
              handleToggle={handleToggle}
              setFormData={setFormData}
            />

            {/* RIGHT COLUMN: BLUEPRINT STYLE APPLICATION FORM */}
            <ApplicationForm
              roles={roles}
              formData={formData}
              formState={formState}
              selectedFile={selectedFile}
              dragActive={dragActive}
              handleChange={handleChange}
              handleDrag={handleDrag}
              handleDrop={handleDrop}
              handleFileChange={handleFileChange}
              removeFile={removeFile}
              handleSubmit={handleSubmit}
              setFormState={setFormState}
            />
          </div>
        </div>
      </section>

      {/* 4. SPECULATIVE INQUIRY PANEL */}
      <SpeculativeInquiry />
    </div>
  );
}
