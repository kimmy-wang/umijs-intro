import { Outlet } from '@umijs/max';

const BaseWrapper = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default BaseWrapper;
