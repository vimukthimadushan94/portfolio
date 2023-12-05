export default function Alert({ message, type}){
    const errorClass = "alert alert-danger alert-dismissible fade show"
    const successClass = "alert alert-success alert-dismissible fade show"
    return (
        <div className={type === 200? successClass : errorClass} role="alert">
            {message}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>
    );
}