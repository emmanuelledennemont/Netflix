import CategoryTitle from "./CategoryTitle";
import List from "./List";

const Section = ({ title = "", urlList = [] }) => {
  return (
    <>
      <main className = "container">
        <CategoryTitle title={title} />
        <div className="list_img">
          <List urlList={urlList} />
        </div>
      </main>
    </>
  );
};

export default Section;
