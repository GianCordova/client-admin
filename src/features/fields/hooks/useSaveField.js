import { useFieldStore } from '../../users/store/adminStore';

export const useSaveField = () => {

    //Recuperacion de funciones para el hook
    const createField = useFieldStore((state) => state.createField);
    const updateField = useFieldStore((state) => state.updateField);

    const saveField = async (data, fieldId = null) => {

        const fromData = new FormData();

        fromData.append("fieldName", data.fieldName);
        fromData.append("fieldType", data.fieldType);
        fromData.append("capacity", data.capacity);
        fromData.append("pricePerHour", data.pricePerHour);
        fromData.append("description", data.description);

        if (data.photo?.length > 0) {
            fromData.append("image", data.photo[0]);
        }

        if(fieldId) {
            await updateField(fieldId, formData);
        }else {
            await createField(formData);
        }

    }

    return { saveField };

}