# React + TypeScript Notes App — სრული პროექტის გეგმა

## პროექტის მიზანი

სტუდენტებმა შექმნან სრულფასოვანი Notes App მხოლოდ frontend-ის გამოყენებით.

პროექტის ბოლოს სტუდენტები ისწავლიან:

- React Component Architecture
- useState
- useEffect
- Props
- Forms
- CRUD Operations
- Conditional Rendering
- Search / Filter
- Component Reusability

---

# საბოლოო ფუნქციონალი
[text](moovies/main.jsx)
აპლიკაციას უნდა შეეძლოს:

- Note დამატება
- Note წაშლა
- Note რედაქტირება
- Notes-ის ნახვა
- Search

---

# ტექნოლოგიები

- React
- Vite
- CSS / Tailwind

---

# ეტაპი 1 — პროექტის შექმნა

## Vite პროექტი

```bash
npm create vite@latest


src/
│
├── components/
│   ├── AddNoteForm.jsx
│   ├── NoteCard.jsx
│   ├── NotesList.jsx
│   └── SearchBar.jsx
│
├
├── App.tsx
└── main.tsx
```

1️⃣ AddNoteForm.jsx — ნოუთის დამატების ფორმა
მიზანი: ახალი ნოუთის შექმნა.

რას უნდა აკეთებდეს:

ფლობდეს <form>-ს ორი ველით:
title (input) — ნოუთის სათაური
content (textarea) — ნოუთის ტექსტი
useState-ით აკონტროლებდეს ორივე input-ის მნიშვნელობას (controlled inputs)
ჰქონდეს "Add Note" ღილაკი
onSubmit-ზე:
ვალიდაცია — ცარიელი ველი არ უნდა გაიგზავნოს
შექმნას ახალი note ობიექტი: { id, title, content, createdAt }
გადასცეს parent-ს props.onAddNote(newNote) ფუნქციით
გაასუფთაოს input-ები submit-ის შემდეგ
Props:

onAddNote(note) — ფუნქცია App.jsx-დან
2️⃣ NoteCard.jsx — ერთი ნოუთის ბარათი
მიზანი: ერთი ცალკეული ნოუთის ჩვენება და მისი მართვა.

რას უნდა აკეთებდეს:

აჩვენებდეს ერთი ნოუთის:
სათაურს (title)
ტექსტს (content)
თარიღს (createdAt) — სურვილისამებრ
ჰქონდეს ღილაკები:
Delete 🗑 — შლის ნოუთს props.onDelete(id)-ით
Edit ✏ — რედაქტირების რეჟიმის ჩართვა
რედაქტირების რეჟიმში:
title/content გადადის input-ებში
Save ღილაკი — props.onUpdate(id, updatedNote) გამოძახება
Cancel — რედაქტირების გაუქმება
ლოკალური useState-ით აკონტროლებდეს isEditing მდგომარეობას
Props:

note — თვითონ ნოუთის ობიექტი
onDelete(id)
onUpdate(id, updatedNote)
3️⃣ NotesList.jsx — ნოუთების სია
მიზანი: ყველა ნოუთის სიის ჩვენება.

რას უნდა აკეთებდეს:

იღებდეს notes-ის მასივს props-ით
.map()-ით აგენერირებდეს <NoteCard /> ყოველი ნოუთისთვის
ყოველ კარდს უგზავნიდეს უნიკალურ key={note.id}-ს
Conditional Rendering:
თუ მასივი ცარიელია — აჩვენებდეს შეტყობინებას: "No notes found" ან "Add your first note"
გადასცემდეს onDelete და onUpdate ფუნქციებს NoteCard-ს
Props:

notes — გასაფილტრი/გასაჩვენებელი მასივი
onDelete(id)
onUpdate(id, updatedNote)
4️⃣ SearchBar.jsx — ძებნის ველი
მიზანი: ნოუთების ფილტრაცია სათაურით/ტექსტით.

რას უნდა აკეთებდეს:

ჰქონდეს ერთი <input type="text" /> placeholder-ით "Search notes..."
onChange-ზე იძახებდეს props.onSearch(value)-ს
controlled input — App.jsx აკონტროლებს searchQuery state-ს
ფილტრაცია ხდება App.jsx-ში:
notes.filter(n => n.title.includes(query) || n.content.includes(query))
გაფილტრული მასივი გადაეცემა NotesList-ს
Props:

searchQuery — მიმდინარე ძებნის ტექსტი
onSearch(value) — ძებნის callback
