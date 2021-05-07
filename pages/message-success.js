import Link from "next/link";
import Button from "@material-ui/core/Button";
import Image from "next/image";

const AboutMe = () => {

  const styles = {
    borderRadius: "3rem",
    borderWidth: "4px",
    outline: "none",
    padding: "10px 20px",
    fontSize: "1rem;"
  }

  return (
    <div className="h-full">
      <div className="align-center text-center m-auto mt-16">
        <Image
          src="/images/contacts/mailbox.svg"
          width={250}
          height={250}
          alt="Mailbox"
        />
        <h1 className="font-bold text-4xl mt-12">Thanks, Message received successfully!</h1>
        <h2 className="font-thin text-2xl mt-5 mb-10">
          I'll be in touch with you shortly.
        </h2>
        <Link href="/">
          <Button variant="outlined" color="primary" style={{...styles}}>
            Back to home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
