# Node2Know — EJS Dynamic Views

A demonstration of injecting dynamic content into EJS templates.

This demo builds on the Intro by adding data passing from the server to the view.

Core concepts:

- Passing data objects to `res.render()`
- Using EJS output tags `<%= %>`
- Using EJS control flow tags `<% %>` (loops, conditionals)
- Dynamic route parameters

Example:

```js
// Route
app.get("/users", (req, res) => {
  const users = ["Curly", "Larry", "Moe"];
  res.render("users", { users: users });
});
```

```html
<!-- View -->
<ul>
  <% users.forEach(user => { %>
  <li><%= user %></li>
  <% }) %>
</ul>
```

---

## ✅ Prereqs

- **Node.js**
- **npm**

Check:

```bash
node -v
npm -v
```

---

## 📦 Install

```bash
npm install
```

---

## ▶️ Run

```bash
npm run dev
```

---

## 🧪 Try it

### Dynamic List

Open:

- `http://localhost:3000/things`

Renders `views/things.ejs`. The router passes a list of "things" which the view iterates over.

### Dynamic Detail

Open:

- `http://localhost:3000/things/1`

Renders `views/thing.ejs` (if implemented) or returns a detail string. The router finds the specific "thing" by ID.

---

## 🧠 Key Code

### Passing Data

```js
// routers/thingRouter.js
const viewData = {
  title: "Thing List",
  things: thingsArray,
};
res.render("things", viewData);
```

### Rendering Data

```html
<!-- views/things.ejs -->
<h1><%= title %></h1>
<ul>
  <% things.forEach(thing => { %>
  <li><%= thing.name %></li>
  <% }) %>
</ul>
```

---

## 📁 Project Structure

```txt
.
├── app.js
├── routers/         # Routes with data logic
├── views/           # Dynamic templates (index.ejs, things.ejs)
├── public/          # Static assets
└── README.md
```

---

## Repo

- https://github.com/ProfessorSolo/Node2Know-02-01-B-EJS-Dynamic-Views.git

---

## License

**Node2Know-LEARN-1.0**
