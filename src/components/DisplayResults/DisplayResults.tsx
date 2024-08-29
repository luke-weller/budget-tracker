interface ResultProps {
  leftover: number;
}

const Result: React.FC<ResultProps> = ({ leftover }) => {
  return (
    <div>
      <h2>Leftover: ${leftover}</h2>
    </div>
  );
};

export default Result;
