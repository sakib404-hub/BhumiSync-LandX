<div align="center">

# 🏛️ BhumiSync

### Inter-agency e-governance middleware & land registry platform for Bangladesh

**One deed. One owner. One source of truth.**

[![Hackathon](https://img.shields.io/badge/LandTech%20Innovation%20Hackathon-2026-1f8a5f?style=for-the-badge)](https://github.com/sakib404-hub/BhumiSync-LandX)
[![Track](https://img.shields.io/badge/Track-Digital%20Land%20Records-f0a030?style=for-the-badge)](https://github.com/sakib404-hub/BhumiSync-LandX)
[![Problem](https://img.shields.io/badge/Problem-P4%20Smart%20e--Mutation%20%26%20Registry-0f2a3d?style=for-the-badge)](https://github.com/sakib404-hub/BhumiSync-LandX)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)

[The Problem](#-the-problem) • [Our Solution](#-our-solution) • [How It Works](#-how-it-works) • [Features](#-key-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Roadmap](#-roadmap)

</div>

---

## 🚨 The Problem

Land disputes in Bangladesh often begin with **fake deeds**, **mismatched CS / SA / RS / BS khatians**, and **offices that do not share data**.

The root cause is a gap between two agencies:

| Step | Agency | Ministry |
|------|--------|----------|
| Deed is registered | Sub-Registry Office | Law |
| Mutation is processed and Khatian updated (weeks later) | AC Land / Union Land Office | Land |

The two steps run in separate systems with **no live link**. In that window the Khatian still shows the old owner, so a dishonest seller can sell the same parcel, or the same share, to several buyers. Each buyer holds a valid-looking deed, and the conflict surfaces later, usually in court.

---

## 💡 Our Solution

**BhumiSync** is inter-agency middleware plus a registry platform. It:

1. 🔍 **Checks** the deed against the Khatian *before* registration
2. 🔒 **Locks** the seller's share the moment a deed is executed
3. ⚡ **Sends** the case to AC Land automatically for mutation
4. 🛡️ **Seals** every deed and mutation cryptographically, so anyone can verify it

| Gap in the current process | BhumiSync response |
|---|---|
| No shared state between registry and land office | Atomic parcel locking at deed execution |
| Seller's share checked manually | Automated share math (16 anna = 1.0000) |
| Mutation starts from a paper application | Automatic e-mutation trigger (signed webhook) |
| Deed details are not cross-checked against the Khatian | **Smart Khatian Mismatch Checker** flags differences before registration |
| Forged or altered deeds; buyers and banks cannot check status | SHA-256 seals, dynamic QR and a public verification portal |

---

## 🔄 How It Works

```mermaid
flowchart LR
    A["1 Pre-validate<br/>parcel + share"] --> B["2 Register deed<br/>+ atomic LOCK"]
    B --> C["3 Auto trigger<br/>signed webhook"]
    C --> D["4 AC Land review<br/>+ approve"]
    D --> E["5 Atomic<br/>mutation"]
    E --> F["6 Seal + QR<br/>verify"]
```

### Parcel lifecycle

```mermaid
stateDiagram-v2
    [*] --> UNLOCKED
    UNLOCKED --> LOCKED_PENDING_MUTATION: deed registered
    LOCKED_PENDING_MUTATION --> UNLOCKED: mutation approved
    LOCKED_PENDING_MUTATION --> UNLOCKED: rejected / cancelled (deed flagged)
    LOCKED_PENDING_MUTATION --> FROZEN_INJUNCTION: injunction
    FROZEN_INJUNCTION --> UNLOCKED: injunction lifted
```

> The lock covers **only the seller's share**. Co-owners' shares stay free.

### Architecture

```
┌──────────────────────────────┐   ┌──────────────────────────────┐
│  Next.js client (App Router) │   │  Public verification portal  │
│  shadcn/ui · Tailwind · SWR  │   │  QR scan · plot search · live│
└──────────────┬───────────────┘   └───────────────┬──────────────┘
               └─────────────────┬─────────────────┘
                                 ▼
        ┌────────────────────────────────────────────┐
        │  Express.js REST API gateway               │
        │  JWT + RBAC · validation · rate limit · audit │
        └───────┬──────────────────┬─────────────────┬──┘
                ▼                  ▼                 ▼
        ┌──────────────┐   ┌──────────────┐   ┌───────────────┐
        │ Registry     │──▶│ Mutation     │   │ Seal + verify │
        │ module       │HMAC│ module       │   │ module        │
        └──────┬───────┘   └──────┬───────┘   └───────┬───────┘
               └──────────────────┼───────────────────┘
                                  ▼
        ┌────────────────────────────────────────────┐
        │  PostgreSQL + Prisma ORM                   │
        │  ACID · row-level locks · Decimal(6,4)     │
        │  unique constraints · append-only audit log│
        └────────────────────────────────────────────┘
```

---

## ✨ Key Features

| Feature | What it does |
|---|---|
| 🧠 **Smart Khatian Mismatch Checker** | Compares the deed with the Khatian record (location, owner, share, area, parcel status) and returns `PASS` / `WARNING` / `BLOCK` with a field-by-field report |
| 🚫 **Double-Sale Prevention** | Locks the seller's share atomically at deed execution, so a second deed or sale on the same share is rejected |
| 🔁 **E-Mutation Workflow** | Deed registration automatically creates the AC Land case; approval updates the Khatians and unlocks the parcel in one transaction |
| ✅ **Pre-validation** | Checks District, Upazila, Mouza, Daag and Khatian; confirms the seller owns the stated share and the parcel is `UNLOCKED` |
| 🔐 **Atomic parcel lock** | One serializable transaction, `SELECT ... FOR UPDATE`, hard collision error on concurrent deeds |
| 📡 **Automatic e-mutation** | Transactional outbox sends an HMAC-signed, idempotent webhook with retries |
| ⚛️ **Atomic Khatian update** | Deducts the source share, creates the buyer's Khatian draft, unlocks the parcel: all or nothing |
| 🔏 **Seals + QR + public portal** | Hash-chained seals; anyone can check title, lock, mortgage, injunction and acquisition status |
| 🚩 **Fraud flags** | Advisory alerts for repeated attempts on locked shares and deed-vs-Khatian mismatches |

### 🔢 Share math

Shares are **exact decimals, never floats**. A deed is rejected if the share sold exceeds the seller's unencumbered share, or if a parcel's shares would exceed `1.0000`.

### 🔗 Tamper-evident sealing

```
state_hash = SHA-256(record + prev_hash)    // chained per parcel
```

```
Deed #1 ──▶ Mutation #1 ──▶ Deed #2 ──▶ Mutation #2
genesis      9c2d41         e07a3b       4f19c8
 └ 9c2d41     └ e07a3b       └ 4f19c8     └ a8d6e2
```

Editing any earlier record breaks every later hash. The QR code opens a public page that recomputes the hash and shows live status.

---

## 👥 Who Uses It

| User | Benefit |
|---|---|
| **Sub-Registry & AC Land offices** | Verify before registering; receive mutation cases automatically; catch conflicting records |
| **Banks, courts, DC offices** | Stop double mortgage; trusted record history; confirm real owners before compensation |
| **Citizens & buyers** | Check before you buy: scan the QR or search the plot |

**Actors:** Sub-Registrar · AC Land Officer · Admin · Citizen / Buyer · Bank Officer · Court Officer

---

## 🧰 Tech Stack

| Tier | Technology |
|---|---|
| **Frontend** | Next.js (App Router), shadcn/ui, Tailwind CSS, Lucide, SWR / React Query |
| **Backend** | Node.js + Express (REST), Prisma ORM, JWT, bcrypt, native Node `crypto` (SHA-256, HMAC) |
| **Database** | PostgreSQL: strict foreign keys, Decimal types, composite unique constraints, append-only audit log |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm, yarn, pnpm or bun

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/sakib404-hub/BhumiSync-LandX.git
cd BhumiSync-LandX

# 2. Install dependencies
npm install
```

### Environment variables

Create a `.env` file and fill in your own values:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/bhumisync"
JWT_SECRET="change-me"
WEBHOOK_HMAC_SECRET="change-me"
```

### Database setup

```bash
npx prisma migrate dev     # create tables
npx prisma db seed         # load synthetic demo data (SYN- prefixed)
```

### Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you edit the source files.

---

## 🔒 Data & Security

- **Synthetic data only.** Fictional names and IDs prefixed `SYN-`. No real records, no scraping; security tested only on our own system.
- **Controls.** bcrypt, short-lived JWT, role and jurisdiction checks, rate-limited public endpoints, HMAC webhooks, and an append-only audit log.
- **Human in the loop.** The system blocks double-sale and over-sale automatically; legal decisions stay with a named officer.
- **Limit of hashing.** A hash proves a record is unchanged, not who made it. Ed25519 digital signatures are on the roadmap.

---

## 🗺️ Roadmap

| Round 1 prototype ✅ | After Round 1 🔜 |
|---|---|
| Synthetic seed data | Ed25519 digital signatures |
| Pre-validation and share math | Bank and court dashboards |
| Deed registration with atomic lock | Fraud-flag dashboard |
| Automatic mutation case | Notifications |
| AC Land approval with atomic Khatian update | Bangla UI |
| SHA-256 seals, QR and public verification | OCR link for legacy records |

**Rollout:** pilot one upazila → district → division → nationwide. Jurisdiction is data, not code; the API scales horizontally with read replicas for the public portal.

### ⚠️ Assumptions

Government systems have no open APIs for hackathon use, so they are mocked behind adapters. The lock is a system control and does not change the law; legal validity of seals and QR codes needs confirmation before any pilot.

---

## 🏆 Hackathon Details

| | |
|---|---|
| **Event** | LandTech Innovation Hackathon 2026 |
| **Track** | Digital Land Records, Verification & Digitization |
| **Problem chosen** | P4: Smart e-Mutation & Registry (also covers P2 and P3) |
| **Team** | LandX |
| **Faculty mentor** | Husne Mubarak |
| **Industry mentor** | Md Jannatul Nayem |

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs): features and API
- [Learn Next.js](https://nextjs.org/learn): interactive tutorial
- [Prisma Docs](https://www.prisma.io/docs): ORM and migrations
- [PostgreSQL Docs](https://www.postgresql.org/docs/): transactions and row-level locking

---

## 👨‍💻 Authors

**Team LandX**

- **Md. Sakib Hossen**: [@sakib404-hub](https://github.com/sakib404-hub)
- **Sumaiya Yesmin**

<div align="center">

⭐ If you find this project useful, please give it a star!

**Made with ❤️ by Team LandX for LandTech Innovation Hackathon 2026**

</div>
