"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  BookOpen,
  LogOut,
  Search,
  Bell,
  ChevronLeft,
  ChevronRight,
  Plus,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Calendar as CalendarIcon,
  TrendingUp,
  MapPin,
  Eye,
  MessageSquare,
  Trash2,
  Menu,
  X,
  Pencil,
  Upload,
  RefreshCw,
  Award,
  Mail,
  Users
} from "lucide-react";

// Inline Project Item Component with manual slide preview
function ProjectRow({ p, handleStartEditProject, handleDeleteProject }) {
  const [imgIdx, setImgIdx] = useState(0);
  const images = p.images && p.images.length > 0
    ? p.images
    : (p.image ? [p.image] : ["/office_building_dusk.png"]);

  const nextImg = (e) => {
    e.stopPropagation();
    setImgIdx(prev => (prev + 1) % images.length);
  };
  const prevImg = (e) => {
    e.stopPropagation();
    setImgIdx(prev => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="border border-slate-100 p-4 bg-slate-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="relative w-20 h-14 bg-slate-100 border border-slate-200 overflow-hidden shrink-0 group">
          <img
            src={images[imgIdx]}
            alt={p.client}
            className="w-full h-full object-cover"
          />
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImg}
                className="absolute left-0.5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft size={10} />
              </button>
              <button
                type="button"
                onClick={nextImg}
                className="absolute right-0.5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight size={10} />
              </button>
            </>
          )}
        </div>
        <div>
          <h4 className="text-xs font-bold text-[#0a1f44]">{p.client}</h4>
          <p className="text-[10px] text-slate-500 mt-1">
            {p.size} • {p.location} • <span className="font-bold text-[#005ea6] capitalize">{p.category}</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <span className={`text-[9px] font-bold uppercase px-2 py-0.5 border ${p.completion === 100
              ? "bg-emerald-50 text-emerald-600 border-emerald-100"
              : "bg-blue-50 text-blue-600 border-blue-100"
            }`}>
            {p.completion === 100 ? "Delivered" : `${p.completion}% Progress`}
          </span>
          <p className="text-[9px] text-slate-400 mt-1">{p.duration}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleStartEditProject(p)}
            className="p-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition-colors"
            title="Edit project"
          >
            <Pencil size={11} />
          </button>
          <button
            onClick={() => handleDeleteProject(p._id)}
            className="p-1.5 border border-rose-200 bg-white hover:bg-rose-50 text-rose-500 transition-colors"
            title="Delete project"
          >
            <Trash2 size={11} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Inline Blog Item Component with manual slide preview
function BlogRow({ blog, handleStartEditBlog, handleDeleteBlog }) {
  const [imgIdx, setImgIdx] = useState(0);
  const images = blog.images && blog.images.length > 0
    ? blog.images
    : (blog.image ? [blog.image] : ["/workplace_strategy.png"]);

  const nextImg = (e) => {
    e.stopPropagation();
    setImgIdx(prev => (prev + 1) % images.length);
  };
  const prevImg = (e) => {
    e.stopPropagation();
    setImgIdx(prev => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="border border-slate-100 p-4 bg-slate-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="relative w-20 h-14 bg-slate-100 border border-slate-200 overflow-hidden shrink-0 group">
          <img
            src={images[imgIdx]}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImg}
                className="absolute left-0.5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft size={10} />
              </button>
              <button
                type="button"
                onClick={nextImg}
                className="absolute right-0.5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight size={10} />
              </button>
            </>
          )}
        </div>
        <div>
          <h4 className="text-xs font-bold text-[#0a1f44] line-clamp-1">{blog.title}</h4>
          <p className="text-[10px] text-slate-500 mt-1">
            {blog.category} • <span className="text-[#005ea6] font-bold">{blog.readTime}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 self-end sm:self-auto">
        <button
          onClick={() => handleStartEditBlog(blog)}
          className="p-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition-colors"
          title="Edit blog post"
        >
          <Pencil size={11} />
        </button>
        <button
          onClick={() => handleDeleteBlog(blog._id)}
          className="p-1.5 border border-rose-200 bg-white hover:bg-rose-50 text-rose-500 transition-colors"
          title="Delete blog post"
        >
          <Trash2 size={11} />
        </button>
      </div>
    </div>
  );
}

// Monthly Calendar Constants
const monthsData = [
  { name: "January", days: 31, offset: 4, index: "01" },
  { name: "February", days: 28, offset: 0, index: "02" },
  { name: "March", days: 31, offset: 0, index: "03" },
  { name: "April", days: 30, offset: 3, index: "04" },
  { name: "May", days: 31, offset: 5, index: "05" },
  { name: "June", days: 30, offset: 1, index: "06" },
  { name: "July", days: 31, offset: 3, index: "07" },
  { name: "August", days: 31, offset: 6, index: "08" },
  { name: "September", days: 30, offset: 2, index: "09" },
  { name: "October", days: 31, offset: 4, index: "10" },
  { name: "November", days: 30, offset: 0, index: "11" },
  { name: "December", days: 31, offset: 2, index: "12" }
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Overview"); // Overview, Projects, Blog
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Calendar State (July 2026 default)
  const [currentMonthIdx, setCurrentMonthIdx] = useState(6);
  const [selectedCalendarDate, setSelectedCalendarDate] = useState(null); // Filter

  // Reminders State
  const [reminders, setReminders] = useState([]);
  const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);
  const [reminderFormData, setReminderFormData] = useState({
    title: "",
    date: "",
    time: "12:00",
    email: "",
    type: "scheduled"
  });

  // Notifications State
  const [notifications, setNotifications] = useState([]);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Blogs State
  const [blogs, setBlogs] = useState([]);
  const [isBlogFormOpen, setIsBlogFormOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [blogFormData, setBlogFormData] = useState({
    title: "",
    category: "",
    readTime: "5 min read",
    summary: "",
    content: "",
    images: []
  });
  const [isSubmittingBlog, setIsSubmittingBlog] = useState(false);

  // Projects State
  const [projects, setProjects] = useState([]);
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projectFormData, setProjectFormData] = useState({
    client: "",
    category: "corporate",
    location: "",
    size: "",
    scope: "",
    duration: "36 Weeks",
    outcomes: "",
    images: [],
    completion: 100
  });
  const [isSubmittingProject, setIsSubmittingProject] = useState(false);

  // Careers Dashboard State
  const [applications, setApplications] = useState([]);
  const [appStats, setAppStats] = useState({ total: 0, applied: 0, underReview: 0, interviewing: 0, hired: 0, declined: 0 });
  const [adminJobs, setAdminJobs] = useState([]);
  const [careerSubTab, setCareerSubTab] = useState("Applications"); // Applications, Jobs
  
  // Job Openings Form State
  const [isJobFormOpen, setIsJobFormOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [jobFormData, setJobFormData] = useState({
    title: "",
    location: "",
    type: "Full-Time",
    experience: "",
    department: "",
    summary: "",
    requirements: "", // stores raw text split by newline
    active: true
  });
  const [isSubmittingJob, setIsSubmittingJob] = useState(false);

  const fetchDashboardData = async () => {
    try {
      const authRes = await fetch("/api/admin/check");
      if (!authRes.ok) {
        router.push("/admin/login");
        return;
      }
      const [blogsRes, projectsRes, remindersRes, notifRes, appsRes, adminJobsRes] = await Promise.all([
        fetch("/api/blogs"),
        fetch("/api/projects"),
        fetch("/api/admin/reminders"),
        fetch("/api/admin/notifications"),
        fetch("/api/admin/applications"),
        fetch("/api/admin/jobs")
      ]);
      if (blogsRes.ok) setBlogs(await blogsRes.json());
      if (projectsRes.ok) setProjects(await projectsRes.json());
      if (remindersRes.ok) setReminders(await remindersRes.json());
      if (notifRes.ok) setNotifications(await notifRes.json());
      if (appsRes.ok) {
        const appsData = await appsRes.json();
        setApplications(appsData.applications || []);
        setAppStats(appsData.stats || { total: 0, applied: 0, underReview: 0, interviewing: 0, hired: 0, declined: 0 });
      }
      if (adminJobsRes.ok) setAdminJobs(await adminJobsRes.json());
      setLoading(false);
    } catch (err) {
      console.error("Error loading dashboard data:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleAddReminderSubmit = async (e) => {
    e.preventDefault();
    if (!reminderFormData.title || !reminderFormData.date) return;

    const tempId = Date.now().toString();
    const newRem = {
      _id: tempId,
      title: reminderFormData.title,
      time: reminderFormData.time,
      date: reminderFormData.date,
      email: reminderFormData.email,
      type: "scheduled"
    };

    setReminders(prev => [newRem, ...prev]);
    setIsReminderModalOpen(false);

    try {
      const res = await fetch("/api/admin/reminders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRem),
      });

      if (!res.ok) throw new Error("Failed to save reminder");
      const data = await res.json();
      setReminders(prev => prev.map(r => r._id === tempId ? data.reminder : r));

      const notifRes = await fetch("/api/admin/notifications");
      if (notifRes.ok) setNotifications(await notifRes.json());
    } catch (error) {
      console.error(error);
      setReminders(prev => prev.filter(r => r._id !== tempId));
    }
  };

  const handleDeleteReminder = async (id) => {
    const previousReminders = [...reminders];
    setReminders(prev => prev.filter(r => r._id !== id));

    try {
      const res = await fetch(`/api/admin/reminders?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete reminder");

      const notifRes = await fetch("/api/admin/notifications");
      if (notifRes.ok) setNotifications(await notifRes.json());
    } catch (error) {
      console.error(error);
      setReminders(previousReminders);
    }
  };

  const handleMarkNotificationsRead = async () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    try {
      await fetch("/api/admin/notifications", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: null })
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (error) {
      router.push("/admin/login");
    }
  };

  const handleBlogImageChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlogFormData(prev => ({ ...prev, images: [...(prev.images || []), reader.result] }));
      };
      reader.readAsDataURL(file);
    });
  };

  const handleProjectImageChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProjectFormData(prev => ({ ...prev, images: [...(prev.images || []), reader.result] }));
      };
      reader.readAsDataURL(file);
    });
  };

  const removeBlogImage = (index) => {
    setBlogFormData(prev => ({ ...prev, images: prev.images.filter((_, idx) => idx !== index) }));
  };

  const removeProjectImage = (index) => {
    setProjectFormData(prev => ({ ...prev, images: prev.images.filter((_, idx) => idx !== index) }));
  };

  // Save Blog
  const handleSaveBlogSubmit = async (e) => {
    e.preventDefault();
    if (!blogFormData.title || !blogFormData.category || !blogFormData.summary) return;

    setIsSubmittingBlog(true);
    const isEdit = !!editingBlog;
    const url = "/api/admin/blogs";
    const method = isEdit ? "PATCH" : "POST";
    const payload = isEdit ? { ...blogFormData, id: editingBlog._id } : blogFormData;

    const tempId = isEdit ? editingBlog._id : Date.now().toString();
    const tempBlog = { ...payload, _id: tempId, createdAt: new Date().toISOString() };

    if (isEdit) {
      setBlogs(prev => prev.map(b => b._id === tempId ? tempBlog : b));
    } else {
      setBlogs(prev => [tempBlog, ...prev]);
    }
    setIsBlogFormOpen(false);

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save blog post.");
      await fetchDashboardData();
    } catch (error) {
      alert(error.message);
      fetchDashboardData();
    } finally {
      setIsSubmittingBlog(false);
      setEditingBlog(null);
    }
  };

  // Save Project
  const handleSaveProjectSubmit = async (e) => {
    e.preventDefault();
    if (!projectFormData.client || !projectFormData.category || !projectFormData.location || !projectFormData.size || !projectFormData.scope) return;

    setIsSubmittingProject(true);
    const isEdit = !!editingProject;
    const url = "/api/admin/projects";
    const method = isEdit ? "PATCH" : "POST";
    const payload = isEdit ? { ...projectFormData, id: editingProject._id } : projectFormData;

    const tempId = isEdit ? editingProject._id : Date.now().toString();
    const tempProject = { ...payload, _id: tempId };

    if (isEdit) {
      setProjects(prev => prev.map(p => p._id === tempId ? tempProject : p));
    } else {
      setProjects(prev => [tempProject, ...prev]);
    }
    setIsProjectFormOpen(false);

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save project.");
      await fetchDashboardData();
    } catch (error) {
      alert(error.message);
      fetchDashboardData();
    } finally {
      setIsSubmittingProject(false);
      setEditingProject(null);
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    setBlogs(prev => prev.filter(b => b._id !== id));
    try {
      await fetch(`/api/admin/blogs?id=${id}`, { method: "DELETE" });
      const notifRes = await fetch("/api/admin/notifications");
      if (notifRes.ok) setNotifications(await notifRes.json());
    } catch (error) {
      fetchDashboardData();
    }
  };

  const handleDeleteProject = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    setProjects(prev => prev.filter(p => p._id !== id));
    try {
      await fetch(`/api/admin/projects?id=${id}`, { method: "DELETE" });
      const notifRes = await fetch("/api/admin/notifications");
      if (notifRes.ok) setNotifications(await notifRes.json());
    } catch (error) {
      fetchDashboardData();
    }
  };

  // Careers Handlers
  const handleUpdateAppStatus = async (appId, newStatus) => {
    try {
      const res = await fetch("/api/admin/applications", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: appId, status: newStatus })
      });
      if (res.ok) {
        await fetchDashboardData();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to update status");
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const handleDeleteApp = async (appId) => {
    if (!confirm("Are you sure you want to discard this application?")) return;
    try {
      const res = await fetch(`/api/admin/applications?id=${appId}`, {
        method: "DELETE"
      });
      if (res.ok) {
        await fetchDashboardData();
      } else {
        alert("Failed to delete application");
      }
    } catch (err) {
      console.error("Error deleting application:", err);
    }
  };

  const handleDownloadResume = (app) => {
    if (!app.resumeContent) {
      alert("No resume attached by this candidate.");
      return;
    }
    const link = document.createElement("a");
    link.href = app.resumeContent;
    link.download = app.resumeName || `${app.name}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleStartEditJob = (job) => {
    setEditingJob(job);
    setJobFormData({
      title: job.title || "",
      location: job.location || "",
      type: job.type || "Full-Time",
      experience: job.experience || "",
      department: job.department || "",
      summary: job.summary || "",
      requirements: job.requirements ? job.requirements.join("\n") : "",
      active: job.active !== undefined ? job.active : true
    });
    setIsJobFormOpen(true);
  };

  const handleSaveJobSubmit = async (e) => {
    e.preventDefault();
    if (!jobFormData.title || !jobFormData.location || !jobFormData.experience || !jobFormData.department || !jobFormData.summary) return;

    setIsSubmittingJob(true);
    const isEdit = !!editingJob;
    const url = "/api/admin/jobs";
    const method = isEdit ? "PATCH" : "POST";
    
    const reqsArray = typeof jobFormData.requirements === "string"
      ? jobFormData.requirements.split("\n").map(r => r.trim()).filter(Boolean)
      : jobFormData.requirements;

    const payload = isEdit 
      ? { ...jobFormData, requirements: reqsArray, id: editingJob._id } 
      : { ...jobFormData, requirements: reqsArray };

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setIsJobFormOpen(false);
        setEditingJob(null);
        await fetchDashboardData();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to save job");
      }
    } catch (err) {
      console.error("Error saving job:", err);
    } finally {
      setIsSubmittingJob(false);
    }
  };

  const handleDeleteJob = async (jobId) => {
    if (!confirm("Are you sure you want to delete this job posting?")) return;
    try {
      const res = await fetch(`/api/admin/jobs?id=${jobId}`, {
        method: "DELETE"
      });
      if (res.ok) {
        await fetchDashboardData();
      } else {
        alert("Failed to delete job");
      }
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  const handleToggleJobActive = async (job) => {
    try {
      const res = await fetch("/api/admin/jobs", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: job._id, active: !job.active })
      });
      if (res.ok) {
        await fetchDashboardData();
      }
    } catch (err) {
      console.error("Error toggling active state:", err);
    }
  };


  const calculateTotalSqFt = () => {
    let total = 0;
    projects.forEach(p => {
      const sizeStr = p.size.toLowerCase();
      if (sizeStr.includes("lakh")) {
        const val = parseFloat(sizeStr) || 0;
        total += val * 100000;
      } else {
        const val = parseFloat(sizeStr.replace(/,/g, "")) || 0;
        total += val;
      }
    });
    if (total >= 100000) {
      return (total / 100000).toFixed(1) + " Lakh";
    }
    return total.toLocaleString() + " Sq. Ft.";
  };

  const activeProjects = projects.filter(p => p.completion < 100);

  const filteredApps = applications.filter(app => 
    (app.name && app.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (app.email && app.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (app.roleTitle && app.roleTitle.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Month configurations
  const currentMonth = monthsData[currentMonthIdx];
  const daysArray = Array.from({ length: currentMonth.days }, (_, i) => i + 1);

  const highlightedDays = reminders
    .map(r => r.date)
    .filter(Boolean);

  const filteredReminders = selectedCalendarDate
    ? reminders.filter(r => r.date === selectedCalendarDate)
    : reminders;

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  const handleStartEditBlog = (blog) => {
    // Fallback: extract images from both images (array) or image (single string)
    const initialImages = blog.images && blog.images.length > 0
      ? blog.images
      : (blog.image ? [blog.image] : []);

    setEditingBlog(blog);
    setBlogFormData({
      title: blog.title || "",
      category: blog.category || "",
      readTime: blog.readTime || "5 min read",
      summary: blog.summary || "",
      content: blog.content || "",
      images: initialImages
    });
    setIsBlogFormOpen(true);
  };

  const handleStartEditProject = (p) => {
    // Fallback: extract images from both images (array) or image (single string)
    const initialImages = p.images && p.images.length > 0
      ? p.images
      : (p.image ? [p.image] : []);

    setEditingProject(p);
    setProjectFormData({
      client: p.client || "",
      category: p.category || "corporate",
      location: p.location || "",
      size: p.size || "",
      scope: p.scope || "",
      duration: p.duration || "36 Weeks",
      outcomes: p.outcomes || "",
      images: initialImages,
      completion: p.completion !== undefined ? p.completion : 100
    });
    setIsProjectFormOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-[#f1f3f6] flex flex-col items-center justify-center">
        <RefreshCw className="w-8 h-8 text-[#005ea6] animate-spin mb-4" />
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Syncing ICC Database...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f1f3f6] text-[#0a1f44] font-sans antialiased relative">

      {/* 1. SIDEBAR (RESPONSIVE) */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-[#0a1f44]/40 backdrop-blur-sm z-40 lg:hidden transition-all duration-300"
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 w-64 bg-[#0a1f44] text-white flex flex-col justify-between shrink-0 border-r border-slate-800 z-50 transition-transform duration-300 transform 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:relative lg:translate-x-0 lg:z-auto
      `}>
        <div>
          <div className="p-6 border-b border-slate-800/60 flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-[#005ea6] to-blue-400 flex items-center justify-center font-bold font-serif text-white">
              I
            </div>
            <div>
              <h2 className="text-base font-bold leading-tight font-serif tracking-wide">ICC Admin</h2>
              <p className="text-[9px] uppercase tracking-widest text-[#005ea6] font-bold">Workspace</p>
            </div>
          </div>

          <nav className="p-4 space-y-1">
            <button
              onClick={() => { setActiveTab("Overview"); setIsSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wider rounded transition-all ${activeTab === "Overview"
                  ? "bg-[#005ea6] text-white shadow-md shadow-[#005ea6]/20"
                  : "text-slate-400 hover:bg-slate-800/40 hover:text-white"
                }`}
            >
              <LayoutDashboard size={16} />
              Overview
            </button>
            <button
              onClick={() => { setActiveTab("Projects"); setIsSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wider rounded transition-all ${activeTab === "Projects"
                  ? "bg-[#005ea6] text-white shadow-md shadow-[#005ea6]/20"
                  : "text-slate-400 hover:bg-slate-800/40 hover:text-white"
                }`}
            >
              <Briefcase size={16} />
              Projects
            </button>
            <button
              onClick={() => { setActiveTab("Blog"); setIsSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wider rounded transition-all ${activeTab === "Blog"
                  ? "bg-[#005ea6] text-white shadow-md shadow-[#005ea6]/20"
                  : "text-slate-400 hover:bg-slate-800/40 hover:text-white"
                }`}
            >
              <BookOpen size={16} />
              Blog
            </button>
            <button
              onClick={() => { setActiveTab("Careers"); setIsSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wider rounded transition-all ${activeTab === "Careers"
                  ? "bg-[#005ea6] text-white shadow-md shadow-[#005ea6]/20"
                  : "text-slate-400 hover:bg-slate-800/40 hover:text-white"
                }`}
            >
              <Briefcase size={16} />
              Careers
            </button>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800/60">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-8 h-8 rounded-full bg-[#005ea6] flex items-center justify-center font-bold text-white text-xs">
              AD
            </div>
            <div>
              <p className="text-xs font-bold">Admin Console</p>
              <p className="text-[10px] text-slate-500">Super Admin</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all"
          >
            <LogOut size={12} />
            Log Out
          </button>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top Header Bar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shrink-0 relative z-30">
          <div className="flex items-center gap-3 w-auto md:w-96">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md transition-colors mr-1"
              aria-label="Toggle Sidebar"
            >
              <Menu size={20} />
            </button>
            <div className="relative w-48 sm:w-64 md:w-80">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-md text-xs focus:outline-none focus:border-blue-500 bg-slate-50/50"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={fetchDashboardData}
              className="text-xs bg-slate-100 hover:bg-slate-250 border border-slate-200 text-slate-600 px-3 py-2 flex items-center gap-1.5 transition-all"
            >
              <RefreshCw size={12} />
              Sync Data
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsNotificationsOpen(!isNotificationsOpen);
                  if (!isNotificationsOpen) handleMarkNotificationsRead();
                }}
                className="relative cursor-pointer p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors focus:outline-none"
              >
                <Bell size={18} />
                {unreadNotificationsCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 text-[8px] font-bold text-white flex items-center justify-center rounded-full">
                    {unreadNotificationsCount}
                  </span>
                )}
              </button>

              {/* Notification Panel */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 shadow-2xl rounded-md overflow-hidden z-50">
                  <div className="bg-[#0a1f44] text-white p-3 flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider">Audit Alerts</span>
                    <button
                      onClick={() => setIsNotificationsOpen(false)}
                      className="text-slate-400 hover:text-white"
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <div className="max-h-72 overflow-y-auto divide-y divide-slate-100">
                    {notifications.length === 0 ? (
                      <p className="text-center text-xs text-slate-400 py-8">No notifications received.</p>
                    ) : (
                      notifications.map(n => (
                        <div key={n._id} className={`p-3 text-xs hover:bg-slate-50 transition-colors ${!n.read ? "bg-blue-50/50" : ""}`}>
                          <div className="flex justify-between items-start">
                            <span className={`font-bold uppercase tracking-wide text-[9px] ${n.type === "success" ? "text-emerald-600" :
                                n.type === "warning" ? "text-rose-600" :
                                  n.type === "audit" ? "text-indigo-600" : "text-blue-600"
                              }`}>{n.title}</span>
                            <span className="text-[8px] text-slate-400">
                              {new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                          <p className="text-slate-600 text-[10px] mt-0.5">{n.description}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="h-8 w-[1px] bg-slate-200" />

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs font-bold">Yogesh Pawar</p>
                <p className="text-[9px] text-[#005ea6] uppercase font-bold tracking-wider">Managing Director</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-[#005ea6] p-[1.5px]">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[11px] font-bold text-[#0a1f44]">
                  YP
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content body wrapper */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">

          {/* Add Reminder Modal Popup */}
          {isReminderModalOpen && (
            <div className="fixed inset-0 bg-[#0a1f44]/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <form onSubmit={handleAddReminderSubmit} className="bg-white border border-slate-200 max-w-md w-full p-6 shadow-2xl relative">
                <button
                  type="button"
                  onClick={() => setIsReminderModalOpen(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                >
                  <X size={18} />
                </button>

                <h3 className="text-base font-bold font-serif text-[#0a1f44] border-b pb-2 mb-4">
                  Schedule Project Reminder
                </h3>

                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Reminder Description *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Audit Site Quality Check"
                      value={reminderFormData.title}
                      onChange={(e) => setReminderFormData({ ...reminderFormData, title: e.target.value })}
                      className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Scheduled Date *</label>
                      <input
                        type="date"
                        required
                        value={reminderFormData.date}
                        onChange={(e) => setReminderFormData({ ...reminderFormData, date: e.target.value })}
                        className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Time *</label>
                      <input
                        type="time"
                        required
                        value={reminderFormData.time}
                        onChange={(e) => setReminderFormData({ ...reminderFormData, time: e.target.value })}
                        className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Email row (Notify Coordinates) *</label>
                    <div className="relative">
                      <Mail className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
                      <input
                        type="email"
                        required
                        placeholder="client-contact@example.com"
                        value={reminderFormData.email}
                        onChange={(e) => setReminderFormData({ ...reminderFormData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 border border-slate-200 text-xs bg-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsReminderModalOpen(false)}
                    className="px-3.5 py-2 border border-slate-300 text-slate-600 text-[10px] font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#005ea6] hover:bg-[#004b84] text-white text-[10px] font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Set Reminder
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT 2 COLUMNS */}
            <div className="lg:col-span-2 space-y-8">

              {activeTab === "Overview" && (
                <div className="space-y-8">
                  {/* Welcome Message Banner */}
                  <div className="bg-gradient-to-r from-[#0a1f44] to-[#005ea6] text-white p-6 rounded-2xl shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400 block mb-1 font-mono">
                      // WORKSPACE ADVISORY CONSOLE
                    </span>
                    <h3 className="text-xl font-bold font-serif">Welcome back, Yogesh Pawar</h3>
                    <p className="text-slate-300 text-xs mt-1 font-light">
                      Track site fit-out progress, live estimation parameters, and incoming career application pipelines.
                    </p>
                  </div>

                  {/* Redesigned Metric Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                    {[
                      {
                        title: "Total Fit-Out Sq Ft",
                        value: calculateTotalSqFt(),
                        detail: "Across India",
                        icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
                        bgColor: "bg-blue-50/60"
                      },
                      {
                        title: "Supervised Projects",
                        value: projects.length,
                        detail: "In Active Ledger",
                        icon: <Briefcase className="w-5 h-5 text-cyan-600" />,
                        bgColor: "bg-cyan-50/60"
                      },
                      {
                        title: "Active Openings",
                        value: adminJobs.length,
                        detail: "On Career Portal",
                        icon: <Award className="w-5 h-5 text-indigo-600" />,
                        bgColor: "bg-indigo-50/60"
                      },
                      {
                        title: "Total Candidates",
                        value: appStats.total,
                        detail: "In HR Pipeline",
                        icon: <Users className="w-5 h-5 text-emerald-600" />,
                        bgColor: "bg-emerald-50/60"
                      }
                    ].map((stat, idx) => (
                      <div key={idx} className="bg-white border-2 border-slate-200/50 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400 font-mono">{stat.title}</p>
                            <h3 className="text-xl font-extrabold text-[#0a1f44] mt-2 font-serif">{stat.value}</h3>
                          </div>
                          <div className={`w-9 h-9 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                            {stat.icon}
                          </div>
                        </div>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-3 font-mono">
                          // {stat.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Careers Candidate Pipeline Funnel widget */}
                  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm space-y-4">
                    <div className="border-b pb-3 border-slate-100 flex items-center justify-between">
                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-[#0a1f44]">HR Pipeline Funnel</h4>
                        <p className="text-[10px] text-slate-400 mt-0.5">Summary of applicant conversion pipeline steps.</p>
                      </div>
                      <span className="text-[9px] font-bold uppercase text-[#005ea6] bg-blue-50 px-2 py-0.5 rounded font-mono">
                        Seeded + Dynamic
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-1">
                      {[
                        { label: "Applied", count: appStats.applied, color: "bg-blue-500", percent: appStats.total ? Math.round((appStats.applied / appStats.total) * 100) : 0 },
                        { label: "Under Review", count: appStats.underReview, color: "bg-amber-500", percent: appStats.total ? Math.round((appStats.underReview / appStats.total) * 100) : 0 },
                        { label: "Interviewing", count: appStats.interviewing, color: "bg-indigo-500", percent: appStats.total ? Math.round((appStats.interviewing / appStats.total) * 100) : 0 },
                        { label: "Hired", count: appStats.hired, color: "bg-emerald-500", percent: appStats.total ? Math.round((appStats.hired / appStats.total) * 100) : 0 }
                      ].map((step, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-250 p-4 rounded-lg flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                              <span>{step.label}</span>
                              <span className="text-[#0a1f44]">{step.count}</span>
                            </div>
                            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
                              <div className={`h-full rounded-full ${step.color}`} style={{ width: `${step.percent}%` }} />
                            </div>
                          </div>
                          <span className="text-[9px] text-slate-400 font-semibold mt-3 block">{step.percent}% of total candidates</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Grid: Projects and Recent Candidates */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Active Key Projects */}
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm space-y-4">
                      <div className="border-b pb-3 border-slate-100 flex items-center justify-between">
                        <h3 className="text-xs uppercase tracking-wider font-bold text-[#0a1f44]">Active Site progress</h3>
                        <span className="text-[9px] font-bold text-[#005ea6] hover:underline cursor-pointer font-mono" onClick={() => setActiveTab("Projects")}>
                          View Ledger
                        </span>
                      </div>

                      <div className="divide-y divide-slate-100 max-h-[300px] overflow-y-auto pr-1">
                        {activeProjects.length === 0 ? (
                          <p className="text-xs text-slate-400 italic py-4">No active projects with completion &lt; 100%.</p>
                        ) : (
                          activeProjects.map((project, idx) => (
                            <div key={project._id || idx} className="py-3 flex items-center justify-between text-xs gap-4">
                              <div className="min-w-0">
                                <p className="font-bold text-[#0a1f44] truncate">{project.client}</p>
                                <p className="text-[9px] text-slate-400 mt-0.5">{project.size} • {project.location}</p>
                              </div>
                              <div className="flex items-center gap-3 shrink-0">
                                <div className="w-20 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                  <div className="bg-[#005ea6] h-full rounded-full" style={{ width: `${project.completion}%` }} />
                                </div>
                                <span className="font-extrabold text-[#0a1f44] w-8 text-right font-mono">{project.completion}%</span>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Recent Candidate Activities */}
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm space-y-4">
                      <div className="border-b pb-3 border-slate-100 flex items-center justify-between">
                        <h3 className="text-xs uppercase tracking-wider font-bold text-[#0a1f44]">Recent Job Applicants</h3>
                        <span className="text-[9px] font-bold text-[#005ea6] hover:underline cursor-pointer font-mono" onClick={() => setActiveTab("Careers")}>
                          View Pipeline
                        </span>
                      </div>

                      <div className="divide-y divide-slate-100 max-h-[300px] overflow-y-auto pr-1">
                        {applications.length === 0 ? (
                          <p className="text-xs text-slate-400 italic py-4">No applicant records in the database.</p>
                        ) : (
                          applications.slice(0, 5).map((app, idx) => (
                            <div key={app._id || idx} className="py-3 flex items-center justify-between text-xs gap-4">
                              <div className="min-w-0">
                                <p className="font-bold text-[#0a1f44] truncate">{app.name}</p>
                                <p className="text-[9px] text-slate-400 mt-0.5 truncate font-mono">
                                  Applied: {app.roleTitle}
                                </p>
                              </div>
                              <span className={`shrink-0 text-[9px] font-extrabold px-2 py-0.5 rounded-full ${
                                app.status === "Hired" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                                app.status === "Interviewing" ? "bg-indigo-50 text-indigo-600 border border-indigo-100" :
                                app.status === "Under Review" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                                app.status === "Declined" ? "bg-slate-100 text-slate-400 border border-slate-200" :
                                "bg-blue-50 text-blue-600 border border-blue-100"
                              }`}>
                                {app.status}
                              </span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Projects" && (
                <div className="bg-white border border-slate-200 p-6 rounded shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b pb-3 border-slate-100">
                    <div>
                      <h3 className="text-sm font-bold font-serif text-[#0a1f44]">Project Execution Ledger</h3>
                      <p className="text-[10px] text-slate-400 mt-0.5">Manage details and timelines of delivered or active sites.</p>
                    </div>
                    <button
                      onClick={() => {
                        setEditingProject(null);
                        setProjectFormData({
                          client: "",
                          category: "corporate",
                          location: "",
                          size: "",
                          scope: "",
                          duration: "36 Weeks",
                          outcomes: "",
                          images: [],
                          completion: 100
                        });
                        setIsProjectFormOpen(true);
                      }}
                      className="bg-[#005ea6] hover:bg-[#004b84] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <Plus size={13} /> Add New Project
                    </button>
                  </div>

                  {isProjectFormOpen && (
                    <form onSubmit={handleSaveProjectSubmit} className="bg-slate-50 border border-slate-200 p-5 rounded space-y-4">
                      <div className="flex justify-between items-center border-b border-slate-200 pb-2 mb-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0a1f44]">
                          {editingProject ? "Edit Project Details" : "Create New Project Entry"}
                        </h4>
                        <button type="button" onClick={() => setIsProjectFormOpen(false)} className="text-slate-400 hover:text-slate-600">
                          <X size={16} />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Client / Company Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. JPMorgan Chase"
                            value={projectFormData.client}
                            onChange={(e) => setProjectFormData({ ...projectFormData, client: e.target.value })}
                            className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Category *</label>
                          <select
                            value={projectFormData.category}
                            onChange={(e) => setProjectFormData({ ...projectFormData, category: e.target.value })}
                            className="border border-slate-200 px-3 py-2 text-xs bg-white text-slate-700 focus:outline-none focus:border-blue-500"
                          >
                            <option value="corporate">Corporate Offices</option>
                            <option value="retail">Retail</option>
                            <option value="hospitality">Hospitality</option>
                            <option value="residential">Residential</option>
                            <option value="turnkey">Turnkey</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Location *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Bengaluru"
                            value={projectFormData.location}
                            onChange={(e) => setProjectFormData({ ...projectFormData, location: e.target.value })}
                            className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Area Size *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. 150,000 Sq. Ft."
                            value={projectFormData.size}
                            onChange={(e) => setProjectFormData({ ...projectFormData, size: e.target.value })}
                            className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Duration (Weeks)</label>
                          <input
                            type="text"
                            placeholder="e.g. 36 Weeks"
                            value={projectFormData.duration}
                            onChange={(e) => setProjectFormData({ ...projectFormData, duration: e.target.value })}
                            className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Scope of Work *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Turnkey Fit-Out Project Management"
                            value={projectFormData.scope}
                            onChange={(e) => setProjectFormData({ ...projectFormData, scope: e.target.value })}
                            className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Completion Percentage (0 - 100) *</label>
                          <input
                            type="number"
                            required
                            min="0"
                            max="100"
                            placeholder="100"
                            value={projectFormData.completion}
                            onChange={(e) => setProjectFormData({ ...projectFormData, completion: Number(e.target.value) })}
                            className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Key Outcomes / Outcomes Summary</label>
                        <textarea
                          rows={2}
                          placeholder="Summary of construction outcomes..."
                          value={projectFormData.outcomes}
                          onChange={(e) => setProjectFormData({ ...projectFormData, outcomes: e.target.value })}
                          className="border border-slate-200 px-3 py-2 text-xs bg-white resize-none focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div className="bg-white p-4 border border-slate-200 space-y-3">
                        <div className="flex flex-col gap-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Project Showcase Images (Multiple Allowed)</label>
                          <div className="flex items-center gap-2">
                            <input
                              type="file"
                              multiple
                              accept="image/*"
                              id="project-file-input"
                              onChange={handleProjectImageChange}
                              className="hidden"
                            />
                            <label
                              htmlFor="project-file-input"
                              className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 text-[10px] font-bold uppercase tracking-wider cursor-pointer border border-slate-300 transition-colors"
                            >
                              <Upload size={12} /> Add Pictures
                            </label>
                          </div>
                        </div>

                        {projectFormData.images && projectFormData.images.length > 0 && (
                          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 pt-2 border-t border-slate-100">
                            {projectFormData.images.map((img, idx) => (
                              <div key={idx} className="relative w-full h-12 border border-slate-200 bg-slate-50 overflow-hidden">
                                <img src={img} alt="Preview" className="w-full h-full object-cover" />
                                <button
                                  type="button"
                                  onClick={() => removeProjectImage(idx)}
                                  className="absolute top-0 right-0 bg-rose-600 hover:bg-rose-800 text-white p-0.5 rounded-full transition-colors"
                                >
                                  <X size={8} />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex justify-end gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            setIsProjectFormOpen(false);
                            setEditingProject(null);
                          }}
                          className="px-3.5 py-2 border border-slate-300 text-slate-600 text-[10px] font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmittingProject}
                          className="px-4 py-2 bg-[#005ea6] hover:bg-[#004b84] text-white text-[10px] font-bold uppercase tracking-wider disabled:bg-slate-400 transition-colors shadow-sm"
                        >
                          {isSubmittingProject ? "Saving..." : "Save Project"}
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="space-y-4">
                    {projects.map((p) => (
                      <ProjectRow
                        key={p._id || p.id}
                        p={p}
                        handleStartEditProject={handleStartEditProject}
                        handleDeleteProject={handleDeleteProject}
                      />
                    ))}

                    {projects.length === 0 && (
                      <p className="text-center text-slate-400 text-xs py-8">No projects available.</p>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "Blog" && (
                <div className="bg-white border border-slate-200 p-6 rounded shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b pb-3 border-slate-100">
                    <div>
                      <h3 className="text-sm font-bold font-serif text-[#0a1f44]">Corporate Insights & Blog Posts</h3>
                      <p className="text-[10px] text-slate-400 mt-0.5">Manage live articles displayed in the website insights page.</p>
                    </div>
                    <button
                      onClick={() => {
                        setEditingBlog(null);
                        setBlogFormData({
                          title: "",
                          category: "",
                          readTime: "5 min read",
                          summary: "",
                          content: "",
                          images: []
                        });
                        setIsBlogFormOpen(true);
                      }}
                      className="bg-[#005ea6] hover:bg-[#004b84] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <Plus size={13} /> Add New Post
                    </button>
                  </div>

                  {isBlogFormOpen && (
                    <form onSubmit={handleSaveBlogSubmit} className="bg-slate-50 border border-slate-200 p-5 rounded space-y-4">
                      <div className="flex justify-between items-center border-b border-slate-200 pb-2 mb-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0a1f44]">
                          {editingBlog ? "Edit Insights Article" : "Create New Insights Article"}
                        </h4>
                        <button type="button" onClick={() => setIsBlogFormOpen(false)} className="text-slate-400 hover:text-slate-600">
                          <X size={16} />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Title *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Acoustic Optimization in Workspaces"
                            value={blogFormData.title}
                            onChange={(e) => setBlogFormData({ ...blogFormData, title: e.target.value })}
                            className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex flex-col gap-1">
                            <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Category *</label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Workplace Strategy"
                              value={blogFormData.category}
                              onChange={(e) => setBlogFormData({ ...blogFormData, category: e.target.value })}
                              className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Read Time</label>
                            <input
                              type="text"
                              placeholder="e.g. 5 min read"
                              value={blogFormData.readTime}
                              onChange={(e) => setBlogFormData({ ...blogFormData, readTime: e.target.value })}
                              className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Short Summary *</label>
                        <textarea
                          rows={2}
                          required
                          placeholder="Brief 1-2 sentence summary shown in grids..."
                          value={blogFormData.summary}
                          onChange={(e) => setBlogFormData({ ...blogFormData, summary: e.target.value })}
                          className="border border-slate-200 px-3 py-2 text-xs bg-white resize-none focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Full Content</label>
                        <textarea
                          rows={4}
                          placeholder="Write the complete blog article body content..."
                          value={blogFormData.content}
                          onChange={(e) => setBlogFormData({ ...blogFormData, content: e.target.value })}
                          className="border border-slate-200 px-3 py-2 text-xs bg-white resize-none focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div className="bg-white p-4 border border-slate-200 space-y-3">
                        <div className="flex flex-col gap-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Cover Pictures (Multiple Allowed)</label>
                          <div className="flex items-center gap-2">
                            <input
                              type="file"
                              multiple
                              accept="image/*"
                              id="image-file-input"
                              onChange={handleBlogImageChange}
                              className="hidden"
                            />
                            <label
                              htmlFor="image-file-input"
                              className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 text-[10px] font-bold uppercase tracking-wider cursor-pointer border border-slate-300 transition-colors"
                            >
                              <Upload size={12} /> Add Pictures
                            </label>
                          </div>
                        </div>

                        {blogFormData.images && blogFormData.images.length > 0 && (
                          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 pt-2 border-t border-slate-100">
                            {blogFormData.images.map((img, idx) => (
                              <div key={idx} className="relative w-full h-12 border border-slate-200 bg-slate-50 overflow-hidden">
                                <img src={img} alt="Preview" className="w-full h-full object-cover" />
                                <button
                                  type="button"
                                  onClick={() => removeBlogImage(idx)}
                                  className="absolute top-0 right-0 bg-rose-600 hover:bg-rose-800 text-white p-0.5 rounded-full transition-colors"
                                >
                                  <X size={8} />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex justify-end gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            setIsBlogFormOpen(false);
                            setEditingBlog(null);
                          }}
                          className="px-3.5 py-2 border border-slate-300 text-slate-600 text-[10px] font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmittingBlog}
                          className="px-4 py-2 bg-[#005ea6] hover:bg-[#004b84] text-white text-[10px] font-bold uppercase tracking-wider disabled:bg-slate-400 transition-colors shadow-sm"
                        >
                          {isSubmittingBlog ? "Saving Article..." : "Publish Article"}
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="space-y-4">
                    {blogs.map((blog) => (
                      <BlogRow
                        key={blog._id || blog.id}
                        blog={blog}
                        handleStartEditBlog={handleStartEditBlog}
                        handleDeleteBlog={handleDeleteBlog}
                      />
                    ))}

                    {blogs.length === 0 && (
                      <p className="text-center text-slate-400 text-xs py-8">No blog posts available.</p>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "Careers" && (
                <div className="space-y-6">
                  {/* Careers sub-navigation */}
                  <div className="bg-white border border-slate-200 p-4 rounded shadow-sm flex items-center justify-between">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCareerSubTab("Applications")}
                        className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all ${
                          careerSubTab === "Applications"
                            ? "bg-[#0a1f44] text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        Applications ({applications.length})
                      </button>
                      <button
                        onClick={() => setCareerSubTab("Jobs")}
                        className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all ${
                          careerSubTab === "Jobs"
                            ? "bg-[#0a1f44] text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        Job Openings ({adminJobs.length})
                      </button>
                    </div>

                    {careerSubTab === "Jobs" && (
                      <button
                        onClick={() => {
                          setEditingJob(null);
                          setJobFormData({
                            title: "",
                            location: "",
                            type: "Full-Time",
                            experience: "",
                            department: "",
                            summary: "",
                            requirements: "",
                            active: true
                          });
                          setIsJobFormOpen(true);
                        }}
                        className="bg-[#005ea6] hover:bg-[#004b84] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 flex items-center gap-1.5 transition-colors shadow-sm"
                      >
                        <Plus size={13} /> Create Job Post
                      </button>
                    )}
                  </div>

                  {/* 1. APPLICATIONS MANAGEMENT TAB */}
                  {careerSubTab === "Applications" && (
                    <div className="space-y-6">
                      {/* Quick Application Stats */}
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                        {[
                          { label: "Total Candidates", value: appStats.total, color: "text-[#0a1f44]" },
                          { label: "Pending Review", value: appStats.applied, color: "text-blue-600" },
                          { label: "Interviewing", value: appStats.interviewing, color: "text-indigo-600" },
                          { label: "Total Hired", value: appStats.hired, color: "text-emerald-600" },
                          { label: "Declined", value: appStats.declined, color: "text-slate-400" }
                        ].map((stat, idx) => (
                          <div key={idx} className="bg-white border border-slate-200 p-4 rounded shadow-sm">
                            <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">{stat.label}</span>
                            <span className={`text-xl font-extrabold block mt-1.5 ${stat.color}`}>{stat.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Applications Table / Cards */}
                      <div className="bg-white border border-slate-200 p-6 rounded shadow-sm space-y-4">
                        <div className="border-b pb-3 border-slate-100">
                          <h3 className="text-sm font-bold font-serif text-[#0a1f44]">Applicant Pipeline</h3>
                          <p className="text-[10px] text-slate-400 mt-0.5">Manage incoming resumes, candidate status, and details.</p>
                        </div>

                        <div className="space-y-4">
                          {filteredApps.length > 0 ? (
                            filteredApps.map((app) => (
                              <div
                                key={app._id}
                                className="border border-slate-150 p-5 rounded bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-all space-y-4"
                              >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                  <div>
                                    <h4 className="text-sm font-bold text-[#0a1f44] font-serif">{app.name}</h4>
                                    <p className="text-[10px] text-[#005ea6] font-bold mt-1 uppercase tracking-wide">
                                      Applied for: {app.roleTitle}
                                    </p>
                                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[10px] text-slate-500 font-semibold">
                                      <span>📧 {app.email}</span>
                                      <span>📞 {app.phone}</span>
                                      <span>📅 {new Date(app.createdAt).toLocaleDateString()}</span>
                                    </div>
                                  </div>

                                  <div className="flex flex-wrap items-center gap-3">
                                    {/* Status selector */}
                                    <div className="flex flex-col gap-0.5">
                                      <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400">Pipeline Stage</span>
                                      <select
                                        value={app.status}
                                        onChange={(e) => handleUpdateAppStatus(app._id, e.target.value)}
                                        className="border border-slate-200 text-xs px-2.5 py-1.5 bg-white text-slate-700 font-bold focus:outline-none focus:border-blue-500 rounded"
                                      >
                                        <option value="Applied">Applied</option>
                                        <option value="Under Review">Under Review</option>
                                        <option value="Interviewing">Interviewing</option>
                                        <option value="Hired">Hired</option>
                                        <option value="Declined">Declined</option>
                                      </select>
                                    </div>

                                    {/* Resume Download Action */}
                                    {app.resumeContent ? (
                                      <button
                                        onClick={() => handleDownloadResume(app)}
                                        className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 flex items-center gap-1.5 transition-colors self-end rounded shadow-sm"
                                      >
                                        <FileText size={12} /> Download CV
                                      </button>
                                    ) : (
                                      <span className="text-[10px] text-slate-400 italic px-2 self-end mb-2">No CV Uploaded</span>
                                    )}

                                    {/* Delete Action */}
                                    <button
                                      onClick={() => handleDeleteApp(app._id)}
                                      className="p-2 border border-rose-200 bg-white hover:bg-rose-50 text-rose-500 transition-colors self-end rounded shadow-sm"
                                      title="Discard applicant"
                                    >
                                      <Trash2 size={12} />
                                    </button>
                                  </div>
                                </div>

                                {app.coverLetter && (
                                  <div className="bg-white border border-slate-150 p-4 text-xs text-slate-600 leading-relaxed font-light rounded">
                                    <span className="font-bold text-[#0a1f44] block mb-1 text-[9px] uppercase tracking-wider">Statement Note:</span>
                                    <p className="whitespace-pre-wrap">{app.coverLetter}</p>
                                  </div>
                                )}
                              </div>
                            ))
                          ) : (
                            <p className="text-center text-slate-400 text-xs py-8">No applicant profiles found matching search criteria.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2. JOB POSTINGS MANAGEMENT TAB */}
                  {careerSubTab === "Jobs" && (
                    <div className="space-y-6">
                      {/* Job Opening Form */}
                      {isJobFormOpen && (
                        <form onSubmit={handleSaveJobSubmit} className="bg-slate-50 border border-slate-200 p-6 rounded space-y-4">
                          <div className="flex justify-between items-center border-b border-slate-200 pb-2 mb-2">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0a1f44]">
                              {editingJob ? "Modify Job Parameters" : "Create New Job Opening"}
                            </h4>
                            <button type="button" onClick={() => setIsJobFormOpen(false)} className="text-slate-400 hover:text-slate-600">
                              <X size={16} />
                            </button>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                              <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Position Title *</label>
                              <input
                                type="text"
                                required
                                placeholder="e.g. Senior Site Engineer"
                                value={jobFormData.title}
                                onChange={(e) => setJobFormData({ ...jobFormData, title: e.target.value })}
                                className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Department / Domain *</label>
                              <input
                                type="text"
                                required
                                placeholder="e.g. Execution"
                                value={jobFormData.department}
                                onChange={(e) => setJobFormData({ ...jobFormData, department: e.target.value })}
                                className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="flex flex-col gap-1">
                              <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Office Location *</label>
                              <input
                                type="text"
                                required
                                placeholder="e.g. Bengaluru"
                                value={jobFormData.location}
                                onChange={(e) => setJobFormData({ ...jobFormData, location: e.target.value })}
                                className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Experience Needed *</label>
                              <input
                                type="text"
                                required
                                placeholder="e.g. 5–8 Years"
                                value={jobFormData.experience}
                                onChange={(e) => setJobFormData({ ...jobFormData, experience: e.target.value })}
                                className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Employment Type</label>
                              <select
                                value={jobFormData.type}
                                onChange={(e) => setJobFormData({ ...jobFormData, type: e.target.value })}
                                className="border border-slate-200 px-3 py-2 text-xs bg-white text-slate-700 focus:outline-none focus:border-blue-500"
                              >
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Contract">Contract</option>
                                <option value="Internship">Internship</option>
                              </select>
                            </div>
                          </div>

                          <div className="flex flex-col gap-1">
                            <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Role Summary *</label>
                            <textarea
                              rows={2}
                              required
                              placeholder="Brief summary of candidate scope and responsibilities..."
                              value={jobFormData.summary}
                              onChange={(e) => setJobFormData({ ...jobFormData, summary: e.target.value })}
                              className="border border-slate-200 px-3 py-2 text-xs bg-white resize-none focus:outline-none focus:border-blue-500"
                            />
                          </div>

                          <div className="flex flex-col gap-1">
                            <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Key Requirements (One requirement per line)</label>
                            <textarea
                              rows={4}
                              placeholder="Requirement line 1&#10;Requirement line 2&#10;Requirement line 3..."
                              value={jobFormData.requirements}
                              onChange={(e) => setJobFormData({ ...jobFormData, requirements: e.target.value })}
                              className="border border-slate-200 px-3 py-2 text-xs bg-white resize-none focus:outline-none focus:border-blue-500"
                            />
                          </div>

                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="active"
                              checked={jobFormData.active}
                              onChange={(e) => setJobFormData({ ...jobFormData, active: e.target.checked })}
                              className="cursor-pointer"
                            />
                            <label htmlFor="active" className="text-[10px] font-bold uppercase tracking-wider text-slate-600 cursor-pointer">
                              Active (Publish immediately to portal)
                            </label>
                          </div>

                          <div className="flex justify-end gap-3 pt-2 border-t border-slate-200">
                            <button
                              type="button"
                              onClick={() => {
                                setIsJobFormOpen(false);
                                setEditingJob(null);
                              }}
                              className="px-3.5 py-2 border border-slate-300 text-slate-600 text-[10px] font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmittingJob}
                              className="px-4 py-2 bg-[#005ea6] hover:bg-[#004b84] text-white text-[10px] font-bold uppercase tracking-wider disabled:bg-slate-400 transition-colors shadow-sm"
                            >
                              {isSubmittingJob ? "Saving..." : "Save Job Post"}
                            </button>
                          </div>
                        </form>
                      )}

                      {/* Job Openings List */}
                      <div className="bg-white border border-slate-200 p-6 rounded shadow-sm space-y-4">
                        <div className="border-b pb-3 border-slate-100">
                          <h3 className="text-sm font-bold font-serif text-[#0a1f44]">Active Openings</h3>
                          <p className="text-[10px] text-slate-400 mt-0.5">Manage live job listings shown on the career portal.</p>
                        </div>

                        <div className="space-y-3">
                          {adminJobs.map((job) => (
                            <div
                              key={job._id}
                              className="border border-slate-150 p-4 rounded bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                            >
                              <div className="space-y-1.5">
                                <span className="bg-slate-200/60 text-slate-600 text-[8px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded">
                                  {job.department}
                                </span>
                                <h4 className="text-xs font-bold text-[#0a1f44] font-serif">{job.title}</h4>
                                <div className="text-[9px] text-slate-400 uppercase font-semibold flex gap-3">
                                  <span>📍 {job.location}</span>
                                  <span>🕒 {job.type}</span>
                                  <span>💼 {job.experience}</span>
                                </div>
                              </div>

                              <div className="flex items-center gap-3">
                                {/* Toggle active */}
                                <button
                                  type="button"
                                  onClick={() => handleToggleJobActive(job)}
                                  className={`text-[9px] font-bold uppercase border px-2.5 py-1 transition-all rounded ${
                                    job.active
                                      ? "bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100"
                                      : "bg-slate-100 text-slate-400 border-slate-200 hover:bg-slate-200"
                                  }`}
                                >
                                  {job.active ? "● Published" : "○ Draft"}
                                </button>

                                {/* Edit */}
                                <button
                                  onClick={() => handleStartEditJob(job)}
                                  className="p-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition-colors rounded shadow-sm"
                                  title="Edit job opening"
                                >
                                  <Pencil size={11} />
                                </button>

                                {/* Delete */}
                                <button
                                  onClick={() => handleDeleteJob(job._id)}
                                  className="p-1.5 border border-rose-200 bg-white hover:bg-rose-50 text-rose-500 transition-colors rounded shadow-sm"
                                  title="Delete job opening"
                                >
                                  <Trash2 size={11} />
                                </button>
                              </div>
                            </div>
                          ))}

                          {adminJobs.length === 0 && (
                            <p className="text-center text-slate-400 text-xs py-8">No job openings created yet.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}


            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-8">

              {/* Single Month Calendar Widget */}
              <div className="bg-white border-2 border-slate-200/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-[#005ea6]" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0a1f44] font-mono">
                      {currentMonth.name} 2026
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setCurrentMonthIdx(prev => (prev - 1 + 12) % 12)}
                      className="p-1 hover:bg-slate-100 text-slate-500 rounded focus:outline-none"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <button
                      onClick={() => setCurrentMonthIdx(prev => (prev + 1) % 12)}
                      className="p-1 hover:bg-slate-100 text-slate-500 rounded focus:outline-none"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase text-slate-400 mb-2 font-mono">
                  <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  {Array.from({ length: currentMonth.offset }).map((_, idx) => (
                    <div key={`offset-${idx}`} className="h-9" />
                  ))}

                  {daysArray.map((day) => {
                    const formattedDayStr = String(day).padStart(2, '0');
                    const dateStr = `2026-${currentMonth.index}-${formattedDayStr}`;
                    const hasEvent = highlightedDays.includes(dateStr);
                    const isSelected = selectedCalendarDate === dateStr;

                    return (
                      <button
                        key={`day-${day}`}
                        type="button"
                        onClick={() => setSelectedCalendarDate(isSelected ? null : dateStr)}
                        className={`h-9 flex flex-col items-center justify-center text-xs font-bold rounded-lg cursor-pointer transition-all w-full focus:outline-none ${
                          isSelected
                            ? "bg-[#005ea6] text-white shadow-sm ring-2 ring-blue-300"
                            : hasEvent
                              ? "bg-[#005ea6]/10 text-[#005ea6] border border-[#005ea6]/20 hover:bg-[#005ea6]/20"
                              : "text-[#0a1f44] hover:bg-slate-50"
                        }`}
                      >
                        <span>{day}</span>
                        {hasEvent && (
                          <span className={`w-1 h-1 rounded-full mt-0.5 ${isSelected ? 'bg-white' : 'bg-[#005ea6]'}`} />
                        )}
                      </button>
                    );
                  })}
                </div>
                {selectedCalendarDate && (
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-[10px] font-bold text-[#005ea6]">Date: {selectedCalendarDate}</span>
                    <button
                      onClick={() => setSelectedCalendarDate(null)}
                      className="text-[9px] font-bold uppercase tracking-wider text-rose-500 hover:underline"
                    >
                      Clear Filter
                    </button>
                  </div>
                )}
              </div>

              {/* Reminders List */}
              <div className="bg-white border-2 border-slate-200/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[380px]">
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                    <div className="flex flex-col">
                      <h3 className="text-xs uppercase tracking-wider font-extrabold text-[#0a1f44] font-mono">
                        Reminders
                      </h3>
                      {selectedCalendarDate && (
                        <span className="text-[9px] text-[#005ea6] font-bold mt-0.5">
                          Filtered: {selectedCalendarDate}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        setReminderFormData({
                          title: "",
                          date: selectedCalendarDate || "", // AUTO-FILL CLICKED CALENDAR DATE!
                          time: "12:00",
                          email: "",
                          type: "scheduled"
                        });
                        setIsReminderModalOpen(true);
                      }}
                      className="text-[#005ea6] hover:text-[#004b84] hover:bg-blue-50 px-2 py-1.5 border border-dashed border-slate-250 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors rounded"
                    >
                      <Plus size={11} /> Add Task
                    </button>
                  </div>

                  <div className="space-y-2.5 max-h-[280px] overflow-y-auto pr-1">
                    {filteredReminders.map((rem) => (
                      <div
                        key={rem._id}
                        className="flex items-start justify-between gap-3 p-3 bg-slate-50 border-l-2 border-l-[#005ea6] border border-slate-100 hover:shadow-sm transition-all group rounded-r-lg"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-slate-700 leading-snug truncate">{rem.title}</p>
                          <div className="flex flex-col gap-1 mt-1 text-[8px] font-bold text-slate-400 uppercase tracking-wide">
                            <span className="flex items-center gap-1"><Clock size={10} /> {rem.time} • {rem.date}</span>
                            {rem.email && (
                              <span className="flex items-center gap-1 text-slate-500 lowercase"><Mail size={10} /> {rem.email}</span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteReminder(rem._id)}
                          className="text-slate-300 hover:text-rose-500 transition-colors p-0.5 group-hover:opacity-100 opacity-0"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    ))}

                    {filteredReminders.length === 0 && (
                      <div className="text-center py-8 space-y-3">
                        <p className="text-slate-400 text-xs italic">No reminders found.</p>
                        {selectedCalendarDate && (
                          <button
                            type="button"
                            onClick={() => {
                              setReminderFormData({
                                title: "",
                                date: selectedCalendarDate,
                                time: "12:00",
                                email: "",
                                type: "scheduled"
                              });
                              setIsReminderModalOpen(true);
                            }}
                            className="bg-blue-50 hover:bg-blue-100 text-[#005ea6] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded transition-all border border-blue-200"
                          >
                            + Add task for this day
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
