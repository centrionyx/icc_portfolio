import { Search, MapPin, Clock, ChevronUp, ChevronDown, Briefcase } from "lucide-react";

export default function CareersOpenings({
  loading,
  filteredRoles,
  searchTerm,
  setSearchTerm,
  filterLocation,
  setFilterLocation,
  expandedRole,
  handleToggle,
  setFormData
}) {
  return (
    <div className="flex-1 w-full space-y-8">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#005ea6] block mb-2 font-mono">
          CAREER PORTAL
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-[#0a1f44] font-serif">
          Current Openings
        </h2>
        <p className="text-slate-500 text-sm mt-2 font-light font-sans">
          Explore active engineering and advisory roles.
        </p>
      </div>

      {/* SEARCH & FILTERS BAR */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex-1 flex items-center gap-2 px-3 border-b sm:border-b-0 sm:border-r border-slate-150 pb-2 sm:pb-0">
          <Search size={16} className="text-slate-400 shrink-0" />
          <input 
            type="text"
            placeholder="Search roles or departments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-sm text-[#0a1f44] bg-transparent focus:outline-none placeholder-slate-400 font-sans"
          />
        </div>
        <div className="flex items-center gap-2 px-2 shrink-0">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">Location:</span>
          <select 
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            className="text-xs font-bold uppercase text-[#0a1f44] bg-transparent focus:outline-none cursor-pointer font-sans"
          >
            <option value="All">All Locations</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Gurugram">Gurugram / NCR</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
      </div>

      {/* ROLE ACCORDION LIST */}
      <div className="space-y-4">
        {loading ? (
          // Simple loading skeletons
          Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="bg-white border-2 border-slate-200 rounded-2xl p-6 space-y-4 animate-pulse">
              <div className="h-4 bg-slate-200 rounded w-1/4" />
              <div className="h-6 bg-[#slate-200] rounded w-3/4" />
              <div className="h-4 bg-slate-200 rounded w-1/2" />
            </div>
          ))
        ) : filteredRoles.length > 0 ? (
          filteredRoles.map((role) => {
            const roleId = role._id || role.id;
            const isExpanded = expandedRole === roleId;
            return (
              <div 
                key={roleId}
                className={`bg-white border-2 rounded-2xl transition-all duration-300 shadow-sm overflow-hidden ${
                  isExpanded ? "border-[#005ea6]/40 shadow-md" : "border-slate-200/70 hover:border-slate-350"
                }`}
              >
                {/* Header Trigger */}
                <button
                  onClick={() => handleToggle(roleId)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 group"
                >
                  <div className="space-y-3">
                    <span className="inline-block bg-slate-100 text-slate-600 text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded font-mono">
                      {role.department}
                    </span>
                    <h3 className="text-lg font-bold text-[#0a1f44] group-hover:text-[#005ea6] transition-colors font-serif">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-semibold uppercase tracking-wider font-mono">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-[#005ea6]" />
                        {role.location}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} className="text-[#005ea6]" />
                        {role.type}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="bg-[#0a1f44]/5 text-[#0a1f44] px-2 py-0.5 text-[10px] font-bold rounded">
                        Exp: {role.experience}
                      </span>
                    </div>
                  </div>
                  <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#005ea6] group-hover:border-[#005ea6] transition-colors mt-2 shrink-0">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </button>

                {/* Detailed Description Panel */}
                <div 
                  className="transition-all duration-300 ease-in-out overflow-hidden"
                  style={{ maxHeight: isExpanded ? "800px" : "0px" }}
                >
                  <div className="px-6 pb-6 border-t border-slate-150 pt-5 bg-slate-50/50">
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-light font-sans">
                      {role.summary}
                    </p>
                    
                    {role.requirements && role.requirements.length > 0 && (
                      <>
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#005ea6] mb-3 font-mono">
                          KEY REQUIREMENTS & CREDENTIALS
                        </h4>
                        <ul className="space-y-2.5 mb-6 font-sans">
                          {role.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                              <span className="text-[#005ea6] shrink-0 font-bold mt-0.5">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    
                    <button
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, role: roleId }));
                        document.getElementById("apply-form").scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-2 bg-[#0a1f44] hover:bg-[#005ea6] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest rounded-lg shadow-sm hover:shadow transition-all duration-200 font-mono"
                    >
                      Apply For This Role
                      <Briefcase size={12} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-white border-2 border-slate-200 border-dashed p-10 text-center rounded-2xl">
            <p className="text-slate-400 font-medium font-sans">No positions match your filters.</p>
            <button 
              onClick={() => { setSearchTerm(""); setFilterLocation("All"); }}
              className="mt-3 text-xs font-bold text-[#005ea6] hover:underline font-mono"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
