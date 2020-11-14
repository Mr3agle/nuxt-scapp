export default function({store, route, redirect}) {
  const user = store.state.user.user;
  const blockedRouteProfile = /\/auth\/perfil\/*/g;
  if(!user && route.path.match(blockedRouteProfile)){
    redirect('/auth/login');
  }
}

