import Button from "./Button";

type props = {
  show: boolean;
};

function Sidebar(props: props) {
  const { show } = props;
  return (
    <aside className={`${show ? "max-h-[500px] pb-[250px]" : "max-h-0"} bg-nav block md:hidden bg-dark`}>
      <ul className="text-center py-10">
        <li className="opacity-90 text-white">
          <a href="https://go.com" className="uppercase tracking-wider text-sm">
            how we work
          </a>
        </li>
        <li className="mt-8 opacity-90 text-white">
          <a href="https://go.com" className="uppercase tracking-wider text-sm">
            blog
          </a>
        </li>
        <li className="mt-8 opacity-90 text-white">
          <a href="https://go.com" className="uppercase tracking-wider text-sm">
            account
          </a>
        </li>
        <li className="mt-8 flex justify-center">
          <Button
            target="http://nothing.com"
            textButton="VIEW PACKS"
            customStyles="text-white border-white hover:text-black hover:bg-white"
          />
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
