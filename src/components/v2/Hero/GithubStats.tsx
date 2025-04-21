import GitHubCalendar from 'react-github-calendar';

export default function GithubStats() {
  return (
    <div className="my-5">
      <GitHubCalendar
        username="KunalNasa"
        blockSize={12} 
        // year={2025}
        blockMargin={5}
        fontSize={14}
        showWeekdayLabels={true}
        theme={{
            dark:["#b3b3b3", "#5fab5c", "#50b858", "#0df356", "#00ff2f"],
        }
        }
      />
    </div>
  );
}
