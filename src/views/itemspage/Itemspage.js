import React from 'react'

const Itemspage = () => {
    return (
        <div class="form-inline">
            <label class="mr-2">Items per page:</label>
            <select class="form-control" aria-label="changes number of visible items">
                
                <option value="" disabled="" hidden="">5</option>
                <option val="10">10</option>
                <option val="20">20</option>
                <option val="30">30</option>
                <option val="40">40</option>
                <option val="50">50</option>
                <option val="100">100</option>
                <option val="See All">See All</option>
            </select>
        </div>
    )
}

export default Itemspage