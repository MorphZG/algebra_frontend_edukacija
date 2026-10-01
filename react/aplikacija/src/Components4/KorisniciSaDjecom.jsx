export default function KorisniciSaDjecom({ime, dob, children}) {
  return(
    <div>
      <p>
        Pozdrav, zovem se {ime} i imam {dob} godina
      </p>
      {children}
      <p>
        Pozdrav, zovem se {ime} i imam {dob} godina
      </p>
    </div>
  );
}