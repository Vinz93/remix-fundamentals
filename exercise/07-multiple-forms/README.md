# 07. Multiple Forms

## 📝 Notes
- There are forms that can submit with different purposes with different buttons. e.g Login, Sign up or Update, delete
- In order to distinguish the intention of the __form__ you can use `name` and `value` 
- The convention for the submit button is `intent`.
- You can grab the intent in the `action` function with 
  -  const formData = await request.formData()
  -  const intent = formData.get("intent");
- Once you get the intent, you can adjust your server logic base on it
- In UI you can grab the intention from the `transition` and adjust the UI accordingly

## 🤓 Background

Checkout this form:

```tsx
<form method="post">
  <label>
    Username: <input name="username" />
  </label>
  <label>
    Password: <input name="password" type="password" />
  </label>
  <button type="submit">Login</button>
  <button type="submit">Sign Up</button>
</form>
```

We have two buttons for a single form. Even if these were two different forms on
the same page, they're going to post to the same server code. How does our
server code know which one is being submitted?!

The answer is simple, `<button>`s can have a `name` and a `value` just like
other form elements! No joke! Check this out:

```tsx
<button type="submit" name="intent" value="login">
  Login
</button>
<button type="submit" name="intent" value="signup">
  Sign Up
</button>
```

When the user clicks the "Sign Up" button, the form will get submitted with an
`intent` value set to `signup`!

In a Remix context, it's important for you to know also that the
`transition.submission` has all the form data as well, so we can use that to
know which button was used to submit the form on the client as well:

```tsx
const transition = useTransition();
const isLoggingIn = transition.submission?.formData.get("intent") === "login";
```

## 💪 Exercise

Let's add a "delete" button to our post creation page. We'll also change the
"create" button for an "update" button for when we're editing an existing post.

Our backend already has the proper `deletePost` and `updatePost` functions so we
just need to know when to call those.

We'll also want to make sure that the pending states are correct based on which
button was clicked.

> Note: we moved `app/routes/posts/admin/new.tsx` to
> `app/routes/posts/admin/$slug.tsx` to reuse the creation form for editing
> posts. There's not too much that's Remix-specific here, so I did that for you.
> If you want to see a diff, run this:

```
git diff --no-index final/06-progressive-enhancement.extra-01-prefetch/app/routes/posts/admin/new.tsx exercise/07-multiple-forms/app/routes/posts/admin/\$slug.tsx
```

## 🗃 Files

- `app/routes/posts/admin/$slug.tsx`

## 🦉 Elaboration and Feedback

After the instruction, if you want to remember what you've just learned, then
fill out the elaboration and feedback form:

https://ws.kcd.im/?ws=Remix%20Fundamentals&e=07.%20Multiple%20Forms&em=
