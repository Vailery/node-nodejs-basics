const parseEnv = () => {
  // Write your code here
  const environmentVariables = Object.keys(process.env)
    .filter((key) => key.startsWith("RSS_"))
    .map((key) => `${key}=${process.env[key]}`)
    .join("; ");

  console.log(environmentVariables);
};

parseEnv();
