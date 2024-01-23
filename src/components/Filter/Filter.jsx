import { Input } from './Filter.styled'

export function Filter({ filter, setFilter }) {
	const handleFilterChange = (evt) => {
	setFilter(evt.target.value);
};

return (
	<Input
		type="text"
		name="filter"
		placeholder="Search by name"
		value={filter}
		onChange={handleFilterChange}
	/>
);
}