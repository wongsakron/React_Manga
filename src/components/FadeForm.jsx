import PostForm from '../Api/PostForm';

function FadeForm() {
  return (
    <div className="modal fade" id="myModal">
          <div className="modal-dialog modal-sm modal-lg ">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">เพิ่มมังงะ เรื่องใหม่</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
            <div className="modal-body">
                <PostForm/>
            </div>
          </div>
        </div>
      </div> 
  )
}



export default FadeForm;

