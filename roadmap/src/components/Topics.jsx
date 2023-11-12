const Topics = ({ topics }) => {
  return (
    <div className="w-full h-full bg-stone-800 px-20">
      <h2 className="text-3xl text-white font-bold px-4 py-4">
        Web Development Topics
      </h2>
      <p className="px-6 py-3   h-full text-neutral-500">
        Explore the following web development topics to build a strong
        foundation in full-stack development. Each topic includes a brief
        description and resources for further learning.
      </p>
      <ul>
        {topics.map((topic, index) => (
          <li key={index} className="flex  flex-col px-4 py-4">
            <h3 className="text-2xl text-white font-semibold ">
              {topic.title}
            </h3>
            <p className="px-6 py-3  h-full text-neutral-500">
              {topic.description}
            </p>
            <a
              className="px-6 py-3  h-full text-neutral-500"
              href={topic.resourceLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resource link
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;
