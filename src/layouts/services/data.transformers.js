const filterMenuItems = (items, permissions) => {
  return items
    .map((item) => {
      const hasPermission = (secureKey) =>
        Array.isArray(secureKey)
          ? secureKey.some((key) => permissions.includes(key))
          : permissions.includes(secureKey);

      const hasVisibleChildren = item.children
        ? item.children.some((child) => hasPermission(child.secure))
        : false;

      if (hasPermission(item.secure) || hasVisibleChildren) {
        return {
          ...item,
          children: item.children
            ? filterMenuItems(item.children, permissions)
            : undefined,
        };
      }
      return null;
    })
    .filter((item) => item !== null);
};

export const menuItems = (permissions) => {
  const menuItems = [
    {
      key: "/update-gold",
      label: "بروزرسانی قیمت طلا",
      secure: "detail_of_gold_as_shekel",
    },
    {
      key: "roles",
      label: "نقش ها",
      secure: ["view_roles_list", "create_new_role"],
      children: [
        {
          key: "/roles/crud-role",
          label: "تعریف نقش جدید",
          secure: "create_new_role",
        },
        {
          key: "/roles/roles-list",
          label: "لیست نقش ها",
          secure: "view_roles_list",
        },
      ],
    },
    {
      key: "customersLevel",
      label: "سطح مشتریان",
      secure: ["view_customer_level_list", "create_new_customer_level"],
      children: [
        {
          key: "/customers-level/crud-customer",
          label: "تعریف سطح مشتری جدید",
          secure: "create_new_customer_level",
        },
        {
          key: "/customers-level/customers-list",
          label: "لیست سطح مشتریان",
          secure: "view_customer_level_list",
        },
      ],
    },
    {
      key: "users",
      label: "مدیریت کاربران",
      secure: [
        "create_new_back_office_user",
        "view_back_office_users_list",
        "create_new_delivery_agent",
        "view_delivery_agent_list",
        "create_new_factory",
        "view_factory_list",
        "create_new_customer",
        "view_customers_list",
      ],
      children: [
        {
          key: "backOfficeUsers",
          label: "کاربران بک آفیس",
          secure: [
            "create_new_back_office_user",
            "view_back_office_users_list",
          ],
          children: [
            {
              key: "/backoffice-users/crud-backoffice-user",
              label: "تعریف کاربر جدید",
              secure: "create_new_back_office_user",
            },
            {
              key: "/backoffice-users/backoffice-users-list",
              label: "لیست کاربران",
              secure: "view_back_office_users_list",
            },
          ],
        },
        {
          key: "deliveryAgents",
          label: "مامورین پیک",
          secure: ["create_new_delivery_agent", "view_delivery_agent_list"],
          children: [
            {
              key: "/delivery-agents/crud-delivery-agent",
              label: "تعریف مامور پیک جدید",
              secure: "create_new_delivery_agent",
            },
            {
              key: "/delivery-agents/delivery-agents-list",
              label: "لیست مامورین پیک",
              secure: "view_delivery_agent_list",
            },
          ],
        },
        {
          label: "کارخانه‌ها",
          key: "factories",
          secure: ["create_new_factory", "view_factory_list"],
          children: [
            {
              key: "/factories/crud-factory",
              label: "تعریف کارخانه جدید",
              secure: "create_new_factory",
            },
            {
              key: "/factories/factories-list",
              label: "لیست کارخانه ها",
              secure: "view_factory_list",
            },
          ],
        },
        {
          label: "مشتری‌ها",
          key: "customers",
          secure: ["create_new_customer", "view_customers_list"],
          children: [
            {
              key: "/customers/crud-customer",
              label: "تعریف مشتری جدید",
              secure: "create_new_customer",
            },
            {
              key: "/customers/customers-list",
              label: "لیست مشتری ها",
              secure: "view_customers_list",
            },
          ],
        },
      ],
    },
    {
      label: "مدیریت اطلاعات محصولات",
      key: "productsInfo",
      secure: [
        "product_tag_create",
        "product_tag_list",
        "product_category_create",
        "product_category_list",
        "product_size_category_create",
        "product_size_category_list",
        "product_color_list",
        "product_color_create",
        "product_model_create",
        "product_model_list",
        "product_material_create",
        "product_material_list",
      ],
      children: [
        {
          key: "categories",
          label: "دسته بندی",
          secure: ["product_category_create", "product_category_list"],
          children: [
            {
              key: "/categories/crud-category",
              label: " تعریف دسته بندی جدید",
              secure: "product_category_create",
            },
            {
              key: "/categories/categories-list",
              label: "لیست دسته بندی ها",
              secure: "product_category_list",
            },
          ],
        },
        {
          key: "tags",
          label: " تگ ها",
          secure: ["product_tag_create", "product_tag_list"],
          children: [
            {
              key: "/tags/crud-tag",
              label: "تعریف تگ جدید",
              secure: "product_tag_create",
            },
            {
              key: "/tags/tags-list",
              label: "لیست تگ ها",
              secure: "product_tag_list",
            },
          ],
        },
        {
          key: "models",
          label: " مدل ها",
          secure: ["product_model_create", "product_model_list"],
          children: [
            {
              key: "/models/crud-model",
              label: "تعریف مدل جدید",
              secure: "product_model_create",
            },
            {
              key: "/models/models-list",
              label: "لیست مدل ها",
              secure: "product_model_list",
            },
          ],
        },
        {
          key: "materials",
          label: " مواد تشکیل دهنده",
          secure: ["product_material_create", "product_material_list"],
          children: [
            {
              key: "/materials/crud-material",
              label: "تعریف مواد تشکیل دهنده جدید",
              secure: "product_material_create",
            },
            {
              key: "/materials/materials-list",
              label: "لیست مواد تشکیل دهنده",
              secure: "product_material_list",
            },
          ],
        },
        {
          key: "size",
          label: "سایز ",
          secure: [
            "product_size_category_create",
            "product_size_category_list",
          ],
          children: [
            {
              key: "/size/crud-size",
              label: "تعریف سایز جدید",
              secure: "product_size_category_create",
            },
            {
              key: "/size/size-list",
              label: "لیست سایز ها",
              secure: "product_size_category_list",
            },
          ],
        },
        {
          key: "/color-palette",
          label: "رنگ‌بندی",
          secure: ["product_color_list", "product_color_create"],
          children: [
            {
              key: "/color-palette/create",
              label: "تعریف رنگ",
              secure: "product_color_create",
            },
            {
              key: "/color-palette/list",
              label: "لیست رنگ‌ها",
              secure: "product_color_list",
            },
          ],
        },
      ],
    },
    {
      label: "محصولات من",
      key: "products",
      secure: ["product_list", "product_create"],
      children: [
        {
          key: "/products/crud-product",
          label: "تعریف محصول جدید",
          secure: "product_create",
        },
        {
          key: "/products/products-list",
          label: "لیست محصولات",
          secure: "product_list",
        },
      ],
    },
    {
      label: "مدیریت درخواست",
      key: "order",
      secure: [
        "create_factory_supply_request",
        "view_all_factory_supply_request_list",
        "view_factory_factory_supply_request_list",
        "create_franchise_supply_request",
        "view_franchise_franchise_supply_request_list",
        "view_all_franchise_supply_request_list",
      ],
      children: [
        {
          label: "از کارخانه",
          key: "factoryOrders",
          secure: [
            "create_factory_supply_request",
            "view_all_factory_supply_request_list",
          ],
          children: [
            {
              key: "/orders/crud-order",
              label: "تعریف درخواست",
              secure: "create_factory_supply_request",
            },
            {
              key: "/orders/orders-list",
              label: "لیست درخواست ها",
              secure: "view_all_factory_supply_request_list",
            },
          ],
        },
        {
          label: "خزانه از کارخانه",
          key: "treasuryOrdersMng",
          secure: ["view_factory_factory_supply_request_list"],
          children: [
            {
              key: "/treasuryorders/treasuryorders-list",
              label: "لیست درخواست ها",
              secure: "view_factory_factory_supply_request_list",
            },
          ],
        },
        {
          label: "فرانچایز از خزانه",
          key: "franchiseOrders",
          secure: [
            "create_franchise_supply_request",
            "view_franchise_franchise_supply_request_list",
          ],
          children: [
            {
              key: "/franchiseorders/crud-franchiseorder",
              label: "تعریف درخواست",
              secure: "create_franchise_supply_request",
            },
            {
              key: "/franchiseorders/franchiseorders-list",
              label: "لیست درخواست ها",
              secure: "view_franchise_franchise_supply_request_list",
            },
          ],
        },
        {
          label: "فرانچایز توسط خزانه",
          key: "franchiseOrdersMng",
          secure: ["view_all_franchise_supply_request_list"],
          children: [
            {
              key: "/franchiseordersmanagement/franchiseordersmanagement-list",
              label: "لیست درخواست ها",
              secure: "view_all_franchise_supply_request_list",
            },
          ],
        },
      ],
    },
    {
      label: "مدیریت موجودی",
      key: "inventory",
      secure: [
        "view_factory_inventory_list",
        "franchise_create_new_inventory",
        "view_franchise_inventory_list",
      ],
      children: [
        {
          key: "/factory-inventory",
          label: "توسط کارخانه",
          secure: "view_factory_inventory_list",
        },
        {
          label: "توسط فرانچایز",
          key: "franchiseInventory",
          secure: [
            "franchise_create_new_inventory",
            "view_franchise_inventory_list",
          ],
          children: [
            {
              key: "/franchise-inventory/create",
              label: "تعریف محصول جدید",
              secure: "franchise_create_new_inventory",
            },
            {
              key: "/franchise-inventory/list",
              label: "لیست موجودی محصولات",
              secure: "view_franchise_inventory_list",
            },
          ],
        },
      ],
    },
    // {
    //   key: "/franchise-worktime",
    //   label: "ساعت کاری فروشگاه",
    //   secure: "franchise_view_week_work_time",
    // },
    {
      key: "/products-qc",
      label: "کنترل کیفیت (QC)",
      secure: "product_variant_list",
    },
    {
      key: "orders",
      label: "مدیریت سفارشات",
      secure: ["factory_orders_list", "all_orders_list"],
      children: [
        {
          key: "/orders/factory",
          label: "کارخانه",
          secure: "factory_orders_list",
        },
        {
          key: "/orders/customer",
          label: "خزانه",
          secure: "all_orders_list",
        },
      ],
    },
  ];
  return filterMenuItems(menuItems, permissions);
};
