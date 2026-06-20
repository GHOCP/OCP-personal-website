type TitleAndTextProps = {
  titles?: string[];
  texts?: string[];
};

export default function TitleAndText({
  titles = [],
  texts = [],
}: TitleAndTextProps) {
  console.log(titles);
  console.log(texts);

  return (
    <ul>
      {titles.map((title) => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  );
}
