import { useParams } from 'react-router-dom';

export function useItemId() {
    const params = useParams<{ itemId: string }>();

    return { itemId: params?.itemId, hasRoleId: Boolean(params?.itemId) };
}
