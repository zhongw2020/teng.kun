using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace teng.kun.Web.Migrations
{
    public partial class cusmatent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BaseModule_CusBasedata",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CusId = table.Column<string>(nullable: false),
                    CusName = table.Column<string>(nullable: false),
                    CusPhone = table.Column<string>(nullable: true),
                    CusComStartTime = table.Column<DateTime>(nullable: false),
                    CusComEndTime = table.Column<DateTime>(nullable: false),
                    CusState = table.Column<bool>(nullable: false),
                    CusRemark = table.Column<string>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseModule_CusBasedata", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BaseModule_MatBasedata",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MatId = table.Column<string>(nullable: false),
                    MatName = table.Column<string>(nullable: false),
                    MatParameter = table.Column<string>(nullable: false),
                    MatUnit = table.Column<string>(nullable: false),
                    SafeStock = table.Column<double>(nullable: false),
                    CurrStock = table.Column<double>(nullable: false),
                    MaxStock = table.Column<double>(nullable: false),
                    MatRemark = table.Column<string>(nullable: true),
                    MatState = table.Column<bool>(nullable: false),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseModule_MatBasedata", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BaseModule_CusBasedata");

            migrationBuilder.DropTable(
                name: "BaseModule_MatBasedata");
        }
    }
}
