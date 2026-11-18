import { Outlet, Navigate } from 'react-router-dom';

import { SideNavAdmin } from '../../components/SideNavAdmin';
import { useUser } from '../../hooks/UserContext';
import { Container } from './styles';

export function AdminLayout() {
  const { userInfo } = useUser();

  if (!userInfo?.token) {
    return <Navigate to="/login" replace />;
  }

  // Logado, mas sem permissão de admin: volta para a área do cliente.
  if (!userInfo.admin) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container>
      <SideNavAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  );
}
