import { Navigate, Outlet } from 'react-router-dom';

import { Footer, Header } from '../../components';
import { useUser } from '../../hooks/UserContext';

export function UserLayout() {
  const { userInfo } = useUser();

  // Sem login, a API recusa produtos e categorias: manda para o login.
  // replace: o "voltar" do navegador não retorna para a página protegida.
  if (!userInfo?.token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
