type props = {
  show: boolean;
};

function Sidebar(props: props) {
  const { show } = props;
  return (
    <aside className={`${show ? "max-h-[500px] pb-[250px]" : "max-h-0"} block md:hidden bg-dark`}>
      <ul className="text-center py-10">
        <li className="opacity-90">
          <a href="https://go.com" className="hover:text-green">
            home
          </a>
        </li>
        <li className="mt-8 opacity-90">
          <a href="https://go.com" className="hover:text-green">
            about
          </a>
        </li>
        <li className="mt-8 opacity-90">
          <a href="https://go.com" className="hover:text-green">
            contact
          </a>
        </li>
        <li className="mt-8 opacity-90">
          <a href="https://go.com" className="hover:text-green">
            blog
          </a>
        </li>
        <li className="mt-8 opacity-90">
          <a href="https://go.com" className="hover:text-green">
            careers
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
