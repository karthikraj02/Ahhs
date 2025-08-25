import React, { useState, useEffect } from "react";

const icons = {
  wings: "🛡️",
  benefits: "🎓",
  activities: "⚔️",
  engagement: "🌍",
  highlights: "🎺",
  focus: "🔥",
  motto: "📜",
  purpose: "🤝",
  camps: "🏕️",
  adoption: "🌱",
  programs: "📅",
  founded: "🏛️",
  training: "⛑️",
  note: "📝",
  complementary: "🤜🤛",
  skills: "🎖️",
  contribution: "🌟",
};

const nccImages = [
  "https://mgmudupi.ac.in/images/NCC.jpg",
  "https://mgmudupi.ac.in/images/NCC1.jpg",
  "https://mgmudupi.ac.in/images/NCC2.jpg",
  "https://mgmudupi.ac.in/images/NCC3.jpg",
  "https://mgmudupi.ac.in/images/NCC4.jpg",
  "https://mgmudupi.ac.in/images/NCC5.jpg",
  "https://mgmudupi.ac.in/images/NCC6.jpg",
];

const rangerImages = ["https://mgmudupi.ac.in/images/Rangers1.jpg"];
const nssImages = ["https://mgmudupi.ac.in/images/NCC6.jpg"];
const roversImages = ["https://mgmudupi.ac.in/images/Rangers1.jpg"];

function BulletList({ items }) {
  return (
    <ul
      style={{
        paddingLeft: "1.4rem",
        marginTop: "0.5rem",
        marginBottom: "0",
        color: "#444",
        fontSize: 15,
        lineHeight: 1.6,
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            marginBottom: 6,
            position: "relative",
            listStyleType: "none",
            paddingLeft: 20,
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              top: "0.4em",
              color: "#2563EB",
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            •
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function ExpandableItem({ title, icon, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        marginBottom: 14,
        borderRadius: 8,
        boxShadow: open
          ? "0 8px 24px rgba(0,0,0,0.15)"
          : "0 2px 6px rgba(0,0,0,0.1)",
        transition: "box-shadow 0.3s ease",
        backgroundColor: "white",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          cursor: "pointer",
          background: open ? "#2563EB" : "#f0f4ff",
          color: open ? "white" : "#2563EB",
          border: "none",
          padding: "14px 20px",
          width: "100%",
          textAlign: "left",
          fontSize: 18,
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          gap: 12,
          borderRadius: 8,
          transition: "background-color 0.3s ease, color 0.3s ease",
          boxShadow: open ? "0 4px 12px rgba(37, 99, 235, 0.4)" : "none",
          userSelect: "none",
        }}
      >
        <span style={{ fontSize: 22 }}>{icon}</span>
        {title}
        <span style={{ marginLeft: "auto", fontSize: 22 }}>
          {open ? "▲" : "▼"}
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 1000 : 0,
          transition: "max-height 0.4s ease",
          padding: open ? "16px 24px" : "0 24px",
          fontSize: 16,
          color: "#444",
          backgroundColor: "#f9fbff",
        }}
      >
        {children}
      </div>
    </div>
  );
}

const tabsData = [
  {
    label: "NCC (National Cadet Corps)",
    value: "ncc",
    color: "#2563EB",
    content: (
      <>
        <ExpandableItem title="Wings Offered" icon={icons.wings}>
          <BulletList items={["Army and Naval wings for boys and girls."]} />
        </ExpandableItem>
        <ExpandableItem title="Benefits" icon={icons.benefits}>
          <BulletList
            items={[
              'NCC "C" certificate grants extra credits for education and jobs.',
            ]}
          />
        </ExpandableItem>
        <ExpandableItem title="Activities" icon={icons.activities}>
          <BulletList
            items={[
              "Parades",
              "Training camps",
              "Adventurous national camps",
              "Republic Day and Kargil Vijay Diwas events",
            ]}
          />
        </ExpandableItem>
        <ExpandableItem title="Community Engagement" icon={icons.engagement}>
          <BulletList
            items={[
              "Vaccination drives",
              "Crime prevention awareness",
              "Ecosystem restoration",
              "International Yoga Day",
            ]}
          />
        </ExpandableItem>
        <ExpandableItem title="Other Highlights" icon={icons.highlights}>
          <BulletList
            items={[
              "NCC band and cadet participation to promote discipline and patriotism.",
            ]}
          />
        </ExpandableItem>
        <ExpandableItem title="Focus" icon={icons.focus}>
          <BulletList
            items={[
              "Builds discipline, leadership, patriotism, and physical fitness.",
            ]}
          />
        </ExpandableItem>
      </>
    ),
    images: nccImages,
  },
  {
    label: "NSS (National Service Scheme)",
    value: "nss",
    color: "#16A34A",
    content: (
      <>
        <ExpandableItem title="Motto" icon={icons.motto}>
          <BulletList items={['"Not Me But You"']} />
        </ExpandableItem>
        <ExpandableItem title="Purpose" icon={icons.purpose}>
          <BulletList items={["Instills social responsibility through voluntary service."]} />
        </ExpandableItem>
        <ExpandableItem title="Key Activities" icon={icons.activities}>
          <BulletList
            items={[
              "Awareness programs",
              "Cleaning drives",
              "Plantation",
              "Blood donation camps",
              "Health and literacy initiatives",
            ]}
          />
        </ExpandableItem>
        <ExpandableItem title="Annual Camps" icon={icons.camps}>
          <BulletList
            items={[
              "Community service",
              "Health checkups",
              "Voter & Covid-19 awareness",
            ]}
          />
        </ExpandableItem>
        <ExpandableItem title="Village Adoption" icon={icons.adoption}>
          <BulletList items={["Sustained community development initiatives."]} />
        </ExpandableItem>
        <ExpandableItem title="Other Programs" icon={icons.programs}>
          <BulletList
            items={[
              "Workshops",
              "Youth parliaments",
              "Personality development",
              "National recognitions",
            ]}
          />
        </ExpandableItem>
      </>
    ),
    images: nssImages,
  },
  {
    label: "MGM Rangers",
    value: "rangers",
    color: "#7C3AED",
    content: (
      <>
        <ExpandableItem title="Founded" icon={icons.founded}>
          <BulletList items={["1996"]} />
        </ExpandableItem>
        <ExpandableItem title="Focus" icon={icons.purpose}>
          <BulletList
            items={["Girls' wing fostering self-discipline, cooperation, and leadership."]}
          />
        </ExpandableItem>
        <ExpandableItem title="Activities" icon={icons.activities}>
          <BulletList
            items={[
              "Camps",
              "Blood donation",
              "Tree plantation",
              "Cleaning drives",
              "Anti-drug rallies",
            ]}
          />
        </ExpandableItem>
        <ExpandableItem title="Training" icon={icons.training}>
          <BulletList
            items={[
              "First aid",
              "Mapping",
              "Compass reading",
              "Leadership skills development",
            ]}
          />
        </ExpandableItem>
        <ExpandableItem title="Note" icon={icons.note}>
          <BulletList items={["Rangers maintain their own equipment, demonstrating self-reliance."]} />
        </ExpandableItem>
      </>
    ),
    images: rangerImages,
  },
  {
    label: "Rovers",
    value: "rovers",
    color: "#F59E0B",
    content: (
      <>
        <ExpandableItem title="Complementary to Rangers" icon={icons.complementary}>
          <BulletList items={["Focused on boys’ leadership and volunteerism."]} />
        </ExpandableItem>
        <ExpandableItem title="Activities" icon={icons.activities}>
          <BulletList
            items={[
              "Social service projects",
              "Survival training",
              "Leadership camps",
              "Blood donation",
              "Tree plantation",
            ]}
          />
        </ExpandableItem>
        <ExpandableItem title="Skills" icon={icons.skills}>
          <BulletList
            items={[
              "First aid",
              "Event organization",
              "Merit badges",
              "Scouting skills",
            ]}
          />
        </ExpandableItem>
        <ExpandableItem title="Contribution" icon={icons.contribution}>
          <BulletList items={["Active role in college events and community service."]} />
        </ExpandableItem>
      </>
    ),
    images: roversImages,
  },
];

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  if (!images?.length) return null;

  return (
    <div
      style={{
        marginBottom: "1.5rem",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}

export default function NssTabs() {
  const [activeTab, setActiveTab] = useState(tabsData[0].value);

  const activeContent = tabsData.find((tab) => tab.value === activeTab);

  return (
    <div
      style={{
        maxWidth: 720,
        margin: "2rem auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#222",
        padding: "0 1rem",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: "700",
          fontSize: "2rem",
          color: "#333",
        }}
      >
        Student Leadership & Service Programs
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          marginBottom: 32,
          flexWrap: "wrap",
        }}
      >
        {tabsData.map(({ label, value, color }) => (
          <button
            key={value}
            onClick={() => setActiveTab(value)}
            style={{
              cursor: "pointer",
              padding: "12px 28px",
              fontWeight: activeTab === value ? "700" : "600",
              color: activeTab === value ? "white" : color,
              backgroundColor: activeTab === value ? color : "transparent",
              border: `2px solid ${color}`,
              borderRadius: 24,
              transition: "all 0.3s ease",
              boxShadow: activeTab === value ? `0 4px 12px ${color}70` : "none",
              userSelect: "none",
              flexGrow: 1,
              minWidth: 140,
              textAlign: "center",
            }}
            aria-pressed={activeTab === value}
          >
            {label}
          </button>
        ))}
      </div>
      {activeContent && (
        <>
          <Carousel images={activeContent.images} />
          <div style={{ fontSize: 18, lineHeight: 1.6, color: "#444" }}>
            {activeContent.content}
          </div>
        </>
      )}
    </div>
  );
}
