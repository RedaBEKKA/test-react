import React from 'react';

const Header = () => {

    const submitHandler=(e)=>{
        e.preventDefault();
    }  
        return (
            <div className="alert alert-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Navigateur des films</h3>
                        </div>
                        <div className="col-md-8">
                            <form onSubmit={submitHandler}>
                                <input type="search" placeholder="Rechercher ..." className="form-control" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


export default Header;