import React, { useState } from 'react';

const VotingAppExample = () => {
  const [votes, setVotes] = useState({
    option1: 0,
    option2: 0,
  });

  const handleVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  return (
    <div className="voting-app">
      <h2>Vote for Your Favorite Option</h2>
      <div className="options">
        <div>
          <button onClick={() => handleVote('option1')}>Vote Option 1</button>
          <p>Votes: {votes.option1}</p>
        </div>
        <div>
          <button onClick={() => handleVote('option2')}>Vote Option 2</button>
          <p>Votes: {votes.option2}</p>
        </div>
      </div>
    </div>
  );
};

export default VotingAppExample;
