const Info = () => {
    const data = {
        name: "Sayeed Jahin Abid Samin",
        id: "2222114",
        personal_notion_page:
            "https://www.notion.so/d34af707270e4b66bf26762aaad2502a",
        github_id: "Abid214",
        project_github_link: "https://github.com/Abid214/Final-Project-2222114.git",
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Project Info</h2>
            <ul className="list-disc pl-5">
                {Object.entries(data).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Info;
