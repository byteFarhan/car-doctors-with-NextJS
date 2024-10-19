import PropTypes from "prop-types";
const SectionIntro = ({
  sectionCategory,
  sectionTitle,
  sectionDescription,
}) => {
  return (
    <>
      <div className="w-full mx-auto my-10 space-y-2 text-center lg:w-2/4">
        <h5 className="text-primary">{sectionCategory}</h5>
        <h2>{sectionTitle}</h2>
        <p className="mx-auto leading-7 md:w-3/4 lg:w-full">
          {sectionDescription}
        </p>
      </div>
    </>
  );
};

export default SectionIntro;
SectionIntro.propTypes = {
  sectionCategory: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  sectionDescription: PropTypes.string.isRequired,
};
