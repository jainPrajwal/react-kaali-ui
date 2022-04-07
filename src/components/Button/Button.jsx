export const Button = ({ type }) => {
  return (
    <div class="btn-container">
      <button class={`btn btn-${type}`}>{`${type}`} button</button>
    </div>
  );
};
