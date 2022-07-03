const List = ({urlList}) => {
    return urlList.map((url)=> {
        return (
            <div className="img">
            <img src={url} alt="images de film" />
            </div>
        );
    })
   
  };
  
  export default List;
  