const aboutMePoints = [
  " Have An ADHD urge of learning everything and being perfect in all of them.(which i know is impractical).",
  " Like to Play Sports like Cricket, Football, Badminton, Kabaddi & Rugby.",
  " A Professional Mogger.",
  " Can Chase Down a 12+ Run Rate target.",
  " Can Nutmeg 4 defenders in a row. ",
  " A Grown-Up Child who still has tremendous amount of love for Video Games.",
  " Sketching is a part time hobbie.",
  " I am simple. When I feel low, I go to a grassy ground with a 22-yard shaved turf in the middle. ",
  " By the sun, I blend in. By the moon, I retreat within.",
  " Friends call me HEISENBERG , Cause everything about me is ' Uncertain '. "
  // Add more strings here
];

export default function AboutMe() {
  return (
    <div className="p-4 font-semibold font-sans text-sm ">
      {aboutMePoints.map((point, i) => (
        <p key={i} className="mb-2">
          {i + 1} :-  {point}
        </p>
      ))}
    </div>
  );
}

