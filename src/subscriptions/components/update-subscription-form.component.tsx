import { useEffect, useState } from "react";
import { useSubscriptions } from "../contexts/subscriptions.context";
import { usePages } from "../../shared/contexts/pages.context";
import { Row } from "../../shared/components/row";
import { InputText } from "../../shared/components/input-text.component";
import { SubscriptionsIndexPage } from "../pages/subscriptions-index.page";

type UpdateSubscriptionFormProps = {
  id: string;
};

export const UpdateSubscriptionForm = ({ id }: UpdateSubscriptionFormProps) => {
  const { findOneSubscription, updateSubscription } = useSubscriptions();
  const { changePage } = usePages();

  const [name, setName] = useState("");

  useEffect(() => {
    const load = async () => {
      const subscription = await findOneSubscription(id);
      if (!subscription) {
        return;
      }
    };

    if (id !== "") {
      load();
    }
  }, [findOneSubscription, id]);

  const handleSubmit = async () => {
    if (!name || name === "") {
      alert("campo nome inválido");
      return;
    }

    const updated = await updateSubscription(id, {
    });

    if (updated) {
      changePage(<SubscriptionsIndexPage />);
    }
  };

  return (
    <>
      <Row>
        <InputText col={12} label="nome" value={name} setValue={setName} />
      </Row>
      <hr />
      <Row>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={() => changePage(<SubscriptionsIndexPage />)}
          >
            voltar
          </button>
        </div>
        <div className="col-sm-2 ms-auto">
          <button
            type="submit"
            className="btn btn-success w-100"
            onClick={() => handleSubmit()}
          >
            salvar
          </button>
        </div>
      </Row>
    </>
  );
};
