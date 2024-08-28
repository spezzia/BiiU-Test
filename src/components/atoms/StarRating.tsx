import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface StartRatingProps {
  rating: number;
}

export default function StartRating({ rating }: StartRatingProps) {

    const classNameStar = "text-[16px] md:text-[20px] text-yellow-500"
  
const getStars = (rating: number) => {
    let temRating = rating;
    const starts: React.ReactNode[] = [];
    for (let i = 1; i <= 5; i++) {
      if (temRating === 0 || temRating < 0) {
        starts.push(<FaRegStar className={classNameStar}/>);
        continue;
      }
      if (temRating - 1 >= 0) {
        temRating += -1;
        starts.push(<FaStar className={classNameStar}/>);
        continue;
      }
      if (temRating - 1 < 0) {
        temRating += -1;
        starts.push(<FaStarHalfAlt className={classNameStar} />);
        continue;
      }
    }
    return starts;
  };

  return <div className="w-fit flex gap-2">{getStars(rating)}</div>;
}
