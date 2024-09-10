import { useState } from "react";
import FloatingInput from "./FloatingInput";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { validateForm } from "./Validation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import toast from "react-hot-toast";

const Contact = () => {
  const form = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);

  const handleChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
    setFormError({ ...formError, [id]: validateForm(id, value) });
  };
  const handleSubmit = async () => {
    let valid = true;
    let newFormError: { [key: string]: string } = {};
    for (let key in formData) {
      const error = validateForm(key, formData[key]);
      if (error.length > 0) {
        newFormError[key] = error;
        valid = false;
      }
    }
    setFormError(newFormError);
    if (valid) {
      await addDoc(collection(db, "portfolio"), formData);
      setFormData(form);
      toast.success("Submited SuccessFully!", { duration: 4000 });
    } else {
      toast.error("Some error occurred!", { duration: 4000 });
    }
  };

  return (
    <div
      className="px-8 md-mx:px-6 sm-mx:px-4 xs-mx:px-2 mx-10 my-5 font-mono"
      id="Contact"
    >
      <h1 className="text-4xl xl-mx:text-3xl lg-mx:text-2xl sm-mx:text-xl mb-16 mt-10 font-bold text-center text-white">
        <span className="text-primaryColor">05.&nbsp;</span>Contact
      </h1>
      <div
        data-aos="flip-left"
        data-aos-duration="1200"
        className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-3 border p-6 xs-mx:p-4 border-primaryColor rounded-3xl"
      >
        <div className="text-2xl sm:text-3xl text-white font-semibold">
          Let's Connect
        </div>
        <FloatingInput
          id="name"
          name="Name"
          value={formData.name}
          handleChange={handleChange}
          error={formError.name}
        />
        <FloatingInput
          id="email"
          name="Email"
          value={formData.email}
          handleChange={handleChange}
          error={formError.email}
        />
        <FloatingInput
          id="phone"
          name="Phone Number"
          value={formData.phone}
          handleChange={handleChange}
          error={formError.phone}
        />
        <FloatingInput
          id="message"
          name="Message"
          value={formData.message}
          handleChange={handleChange}
          error={formError.message}
        />
        <Button
          fullWidth
          onClick={handleSubmit}
          rightSection={<IconArrowRight size={20} />}
          className="!text-bgColor !font-bold !text-xl sm:!text-2xl"
          variant="filled"
          size="lg"
          radius="lg"
          color="#64FFDA"
        >
          Send
        </Button>
      </div>
    </div>
  );
};
export default Contact;
