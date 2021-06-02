export const updateSortedProperties = sortedProperties => ({
    type: 'UPDATE_SORTED',
    sortedProperties: Array.from(sortedProperties)
})