import './Loading.scss'; // Importing the CSS for styling
/**
 * Loading component that displays a bouncing "Chargement..." text
 * Used as a loading indicator while data is being fetched
 *
 * @component
 * @returns {JSX.Element} A section with animated loading text
 */
const Loading = () => {
  return (
    <section className=" mt-32 text-center text-3xl font-medium">
      <span class="loader"></span>
    </section>
  );
}

export default Loading;
