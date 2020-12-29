export default function ({ storage, redirect, auth }) {
  if (!auth.authorized) {
    return redirect('/auth/login')
  }
}
