import { Outlet } from "react-router-dom";
import Sidebar from "../../components/UserPanel/sidebar/Sidebar";
import Container from "../../components/modules/container";

function Index() {
  return (
    <Container>
      <div className="inline-flex flex-col items-center pt-0 pb-20 bg-white container">
        <div className="inline-flex flex-col items-center px-0 py-20">
          <h1 className=" w-fit text-black text-[54px] tracking-headline-3 leading-14.5 whitespace-nowrap transition-all  ">
            حساب کاربری من
          </h1>
        </div>
        <div className="inline-flex items-start gap-[7px]">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </Container>
  );
}

export default Index;
