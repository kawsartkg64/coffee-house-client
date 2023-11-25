

const CoffeeAdd = () => {
    const handleAddNewcoffee = event=>{
        event.preventDefault()
        const form = event.target;
        const coffeName = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;

        const user = {coffeName, chef, supplier, taste, category, details, photo, quantity }

        console.log(user);
    }
    return (
        <div className='p-44 bg-[#EBE4CF]'>
            <h2 className='text-center mb-10 text-6xl'>Add A New Coffee</h2>



                <form onSubmit={handleAddNewcoffee}>
                    <div className='flex gap-6'>
                        <div className='form-control w-1/2  mb-8'>
                            <label className='label'>
                                <span className='label-text'>Coffee Name</span>
                            </label>
                            <input type="text" name="name" id="" placeholder='Enter Coffee Name' className='input input-bordered w-full ' />
                        </div>
                        <div className='form-control w-1/2 mb-8'> 
                            <label className='label'>
                                <span className='label-text'>Chef</span>
                            </label>
                            <input type="text" name="chef" id="" placeholder='Enter Coffee Name' className='input input-bordered w-full' />
                        </div>

                    </div>
                    <div className='flex gap-4'>
                        <div className='form-control w-1/2 mb-8'>
                            <label className='label'>
                                <span className='label-text'>Supplier</span>
                            </label>
                            <input type="text" name="supplier" id="" placeholder='Enter Coffee Name' className='input input-bordered w-full ' />
                        </div>
                        <div className='form-control w-1/2 mb-8'> 
                            <label className='label'>
                                <span className='label-text'>Taste</span>
                            </label>
                            <input type="text" name="taste" id="" placeholder='Enter Coffee Name' className='input input-bordered w-full' />
                        </div>

                    </div>
                    <div className='flex gap-4'>
                        <div className='form-control w-1/2 mb-8'>
                            <label className='label'>
                                <span className='label-text'>Category</span>
                            </label>
                            <input type="text" name="category" id="" placeholder='Enter Coffee Name' className='input input-bordered w-full ' />
                        </div>
                        <div className='form-control w-1/2 mb-8'> 
                            <label className='label'>
                                <span className='label-text '>Details</span>
                            </label>
                            <input type="text" name="details" id="" placeholder='Enter Coffee Name' className='input input-bordered w-full' />
                        </div>

                    </div>
                    <div className='flex gap-4'>
                        <div className='form-control w-1/2 mb-8'>
                            <label className='label'>
                                <span className='label-text'>Photo URL</span>
                            </label>
                            <input type="text" name="photo" id="" placeholder='Enter Coffee Name' className='input input-bordered w-full ' />
                        </div>
                        <div className='form-control w-1/2 mb-8'> 
                            <label className='label'>
                                <span className='label-text '>Quantity</span>
                            </label>
                            <input type="text" name="quantity" id="" placeholder='Enter Coffee Name' className='input input-bordered w-full' />
                        </div>
                        
                    </div>
                    <input type="submit" value="Add Coffee"  className='btn btn-block bg-[#D2B48C]'/>
                </form>

            </div>
    );
};

export default CoffeeAdd;