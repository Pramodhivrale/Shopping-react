import { NetflixMain } from "./NetflixMain";
import { NetflixHead } from "./NetflixHead";
import './Netflix.css';
export function NetflixIndex() {
    return (
      <div className="netflix-back">
        <section>
        <NetflixHead/>
        <NetflixMain/>
        </section>
      </div>
    );
  }