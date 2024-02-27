type Props = {
  image: string;
  onClick: () => void;
};


export default function ImageButton({ image, onClick }: Props) {
  return (
  <button onClick={onClick}>
    <img src={image} alt="clickable image button" style={{width:50,height:50}}  />
  </button>
  );
}
