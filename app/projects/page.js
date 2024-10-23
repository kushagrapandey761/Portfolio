import Card from "@/components/card";
export default function Projects() {
  return (
    <main className="flex flex-col items-center ">
      <Card
        className="box"
        title="Aimlabs"
        description="An interactive web-based game designed to enhance users’ reaction times and accuracy. It has a dynamic interface with 9 spheres, where any 3 spheres are initially visible. Clicking on visible spheres causes them to disappear. Randomly
selects and displays one of the hidden spheres after each click."
        link="https://aimlabs-inky.vercel.app/"
      />
      <Card
        title="Accident detection system"
        description="A frontend dashboard for an accident detection system using React allowing users to upload accident videos
for analysis. Has a seamless user experience and intuitive dashboard design for accurate accident reporting and analysis."
        link="https://github.com/thundergaming761/Accident-Detection-System"
      />
      <Card
        title="Coin flip simulation"
        description="Utilizes Monte Carlo methods to simulate a large number of coin flips. Recorded and displayed the results of each flip
(number of heads and tails). Applies Markov chain techniques to predict the outcome of the next coin flip. Analyzed the sequence of flips to estimate
transition probabilities between heads and tails."
        link="https://github.com/thundergaming761/Minor1"
      />
    </main>
  );
}
