import GitHubCalendar from 'react-github-calendar';

export default function GithubStats() {
  return (
    <div className="my-5">
      <GitHubCalendar
        username="KunalNasa"
        blockSize={15} 
        year={2025}
        blockMargin={5}
        fontSize={14}
        showWeekdayLabels={true}
      />
    </div>
  );
}
