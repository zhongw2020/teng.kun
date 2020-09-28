using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace teng.kun.Web.Migrations
{
    public partial class OutStorent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OutStorManager_OutStor",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OutstorVoucher = table.Column<string>(nullable: false),
                    OutstorComName = table.Column<string>(nullable: false),
                    CusId = table.Column<string>(nullable: false),
                    MatId = table.Column<string>(nullable: false),
                    SupId = table.Column<string>(nullable: false),
                    OutstorPrice = table.Column<double>(nullable: false),
                    OutstorDate = table.Column<DateTime>(nullable: false),
                    OutstorNum = table.Column<double>(nullable: false),
                    OutEmpId = table.Column<string>(nullable: true),
                    CusCloseAccuntsFlag = table.Column<string>(nullable: true),
                    CusCloseAccuntsEmpId = table.Column<string>(nullable: true),
                    CusCloseAccuntsRemark = table.Column<string>(nullable: true),
                    Abolishflag = table.Column<bool>(nullable: false),
                    AbolishDate = table.Column<DateTime>(nullable: false),
                    AbolishReason = table.Column<string>(nullable: true),
                    RecoilState = table.Column<bool>(nullable: false),
                    RecoilDate = table.Column<DateTime>(nullable: false),
                    RecoilReason = table.Column<string>(nullable: true),
                    PrintState = table.Column<bool>(nullable: false),
                    PrintMoName = table.Column<string>(nullable: true),
                    OutstorRemark = table.Column<string>(nullable: true),
                    CreatorId = table.Column<int>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false),
                    LastUpdaterId = table.Column<int>(nullable: true),
                    LastUpdatedTime = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OutStorManager_OutStor", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OutStorManager_Test09",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OutStorManager_Test09", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OutStorManager_OutStor");

            migrationBuilder.DropTable(
                name: "OutStorManager_Test09");
        }
    }
}
