import Toolbar from "./Toolbar";
import { useState } from "react";
import RenderProject from "./RenderProject";
import pics from "../data-pics/pics";

const Portfolio = () => {
  const [activeCat, setActiveCat] = useState(null);
  const [activePics, setActivePics] = useState(pics);

  const categories = Array.from(new Set(pics.map(pic => pic.category)))

  const onChoose = tag => {
    setActiveCat(tag);
    if (tag === 'All') return setActivePics(pics);
    const activePics = pics.filter(pic => pic.category === tag);
    setActivePics(activePics);
  };

  return (
    <div className='portfolio'>
      <Toolbar
        chooseCategory={onChoose}
        categories={['All', ...categories]}
        activeCat={activeCat}
      />
      <RenderProject pics={activePics} />
    </div>
  );
}

export default Portfolio