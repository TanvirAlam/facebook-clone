import { contacts } from "../../utils/data-contacts";

import { BsSearch, BsFillCameraVideoFill, BsThreeDots } from "react-icons/bs";
import Contact from "./Contact";

export default function Widgets() {
  return (
    <div className="mt-5 hidden w-60 flex-col p-2 lg:flex">
      <div className="mb-5 flex items-center justify-between text-gray-500">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <BsFillCameraVideoFill className="text-xl" />
          <BsSearch className="text-xl" />
          <BsThreeDots className="text-xl" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}
